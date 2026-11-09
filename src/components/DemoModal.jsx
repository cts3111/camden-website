import { useEffect } from "react";

export default function DemoModal({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="demo-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Visual Harmony Analyzer live demo"
      onClick={onClose}
    >
      <div className="demo-frame" onClick={(e) => e.stopPropagation()}>
        <button className="demo-close" onClick={onClose} aria-label="Close demo">
          ✕
        </button>
        <iframe
          src={src}
          title="Visual Harmony Analyzer live demo"
          loading="lazy"
          allow="clipboard-read; clipboard-write"
        />
      </div>
    </div>
  );
}
