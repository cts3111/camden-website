import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Menu from "./components/Menu.jsx";
import Hero from "./components/sections/Hero.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Nav menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((o) => !o)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
