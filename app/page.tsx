import Header from "./components/Header";
import Hero from "./components/Hero";
import "./globals.css";

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <Hero />
    </div>
  );
}
