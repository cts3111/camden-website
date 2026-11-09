import { useEffect, useRef } from "react";
import { profile } from "../../data/content.js";

export default function Hero() {
  const sectionRef = useRef(null);
  const artRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);

  // Mouse parallax: layers drift opposite the cursor, each at its own depth.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layers = [
      { el: artRef.current, depth: 26, scale: 1.06 },
      { el: titleRef.current, depth: 14, scale: 1 },
      { el: labelRef.current, depth: 6, scale: 1 },
      { el: subRef.current, depth: 6, scale: 1 },
    ].filter((l) => l.el);

    let tx = 0; // target, normalized -1..1
    let ty = 0;
    let cx = 0; // current, lerped toward target
    let cy = 0;
    let raf;

    const onMove = (e) => {
      const r = section.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    const loop = () => {
      cx += (tx - cx) * 0.055;
      cy += (ty - cy) * 0.055;
      for (const l of layers) {
        const x = (-cx * l.depth).toFixed(2);
        const y = (-cy * l.depth * 0.78).toFixed(2);
        l.el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${l.scale})`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section id="home" className="section dark hero" ref={sectionRef}>
      <div className="art art-hero" aria-hidden="true" ref={artRef}>
        <span className="orb" />
        <span className="ring r1" />
        <span className="ring r2" />
        <span className="haze h1" />
        <span className="haze h2" />
      </div>

      <div className="section-inner hero-inner">
        <p className="label" ref={labelRef}>
          {profile.eyebrow}
        </p>
        <h1 className="hero-title" ref={titleRef}>
          Camden <em>Sun</em>
        </h1>
        <p className="hero-sub" ref={subRef}>
          {profile.tagline}
        </p>
        <a href="#about" className="hero-cta">
          Scroll to explore <span className="arr">↓</span>
        </a>
      </div>

      <p className="label hero-hint">Scroll</p>
    </section>
  );
}
