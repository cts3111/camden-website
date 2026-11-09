const items = [
  { to: "#home", label: "Home", idx: "01" },
  { to: "#about", label: "About", idx: "02" },
  { to: "#projects", label: "Projects", idx: "03" },
  { to: "#contact", label: "Contact", idx: "04" },
];

export default function Menu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="menu-overlay" role="dialog" aria-modal="true">
      <nav className="menu-links">
        {items.map((it, i) => (
          <a
            key={it.to}
            href={it.to}
            onClick={onClose}
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
