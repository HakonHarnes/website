import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
