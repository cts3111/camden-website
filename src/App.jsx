import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Menu from "./components/Menu.jsx";
import Hero from "./components/sections/Hero.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";
import ProjectPage from "./components/sections/ProjectPage.jsx";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Scroll-snap only makes sense on the one-pager; project pages scroll normally.
function SnapToggle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.classList.toggle("snap-mode", pathname === "/");
  }, [pathname]);
  return null;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <SnapToggle />
      <p className="wip-banner" role="status">
        Site under construction: more coming soon.
      </p>
      <Nav menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((o) => !o)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
