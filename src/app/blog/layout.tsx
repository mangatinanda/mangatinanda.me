import type { ReactNode } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
