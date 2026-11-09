import { useNavigate, useLocation } from "react-router-dom";

const items = [
  { id: "home", label: "Home", idx: "01" },
  { id: "about", label: "About", idx: "02" },
  { id: "projects", label: "Projects", idx: "03" },
  { id: "contact", label: "Contact", idx: "04" },
];

export default function Menu({ open, onClose }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (!open) return null;

  const go = (id) => (e) => {
    e.preventDefault();
    onClose();
    const scroll = () => {
      if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
      else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    if (pathname === "/") scroll();
    else {
      navigate("/");
      setTimeout(scroll, 450); // wait for the home page to render
    }
  };

  return (
    <div className="menu-overlay" role="dialog" aria-modal="true">
      <nav className="menu-links">
        {items.map((it, i) => (
          <a
            key={it.id}
            href={`/#${it.id}`}
            onClick={go(it.id)}
            style={{ animationDelay: `${120 + i * 70}ms` }}
          >
            <span className="menu-idx">{it.idx}</span>
            {it.label}
          </a>
        ))}
      </nav>
      <div className="menu-foot">
        <span className="label">camdensun@gmail.com</span>
        <span className="label">Los Angeles, CA</span>
      </div>
    </div>
  );
}
