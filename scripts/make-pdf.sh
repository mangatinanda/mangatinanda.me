#!/usr/bin/env bash
# Render a resume HTML file to a clean PDF — no browser date/URL headers or footers.
# (Chrome's headless --print-to-pdf omits headers/footers by default; those are only
#  added by the interactive Print dialog. So this output is clean.)
#
# Usage:  scripts/make-pdf.sh [path/to/file.html] [output.pdf]
#   default in:  resume/nanda-resume-freshworks.html
#   default out: same name with .pdf  (pass a 2nd arg for a recruiter-friendly filename)
#   e.g.  scripts/make-pdf.sh resume/nanda-resume-freshworks.html "resume/Nanda Kumar Mangati - Resume.pdf"
set -euo pipefail

IN="${1:-resume/nanda-resume-freshworks.html}"
OUT="${2:-${IN%.html}.pdf}"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || CHROME="/Applications/Chromium.app/Contents/MacOS/Chromium"
[ -x "$CHROME" ] || { echo "Chrome/Chromium not found. Fallback: open $IN in Chrome, Print, uncheck 'Headers and footers', Save as PDF."; exit 1; }

ABS="$(cd "$(dirname "$IN")" && pwd)/$(basename "$IN")"
TMPD="$(mktemp -d)"
trap 'rm -rf "$TMPD"' EXIT

"$CHROME" --headless=new --disable-gpu --no-sandbox \
  --no-first-run --no-default-browser-check \
  --virtual-time-budget=10000 --run-all-compositor-stages-before-draw \
  --no-pdf-header-footer \
  --user-data-dir="$TMPD" \
  --print-to-pdf="$OUT" "file://$ABS" >/dev/null 2>&1

[ -f "$OUT" ] && echo "Wrote $OUT" || { echo "Render failed. Fallback: Chrome > Print > uncheck 'Headers and footers'."; exit 1; }
