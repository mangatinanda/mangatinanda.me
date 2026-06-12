import type { ReactNode } from "react";
import Reveal from "./reveal";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 px-6 md:px-8 ${className}`}>
      <Reveal className="max-w-5xl mx-auto">{children}</Reveal>
    </section>
  );
}
