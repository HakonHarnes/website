import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

import "./globals.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}
