import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills"
import Publications from "./components/Publications";
import Contact from "./components/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
      <NavBar />

      <Home />

      <About />

      <Projects />

      <Skills />

      <Publications />

      <Contact/>
    </div>
  );
}
