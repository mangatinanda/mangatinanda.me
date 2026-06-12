import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import BlogPreview from "@/components/blog-preview";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const BASE_URL = "https://mangatinanda.me";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nanda Kumar Mangati",
  jobTitle: "Senior Full-Stack Engineer",
  url: BASE_URL,
  image: `${BASE_URL}/nanda.jpg`,
  sameAs: [
    "https://github.com/mangatinanda",
    "https://linkedin.com/in/mangatinanda",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
