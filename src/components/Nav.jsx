import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="wordmark" onClick={() => setOpen(false)}>
            Camden Sun <span className="dot" />
          </Link>

          <nav className="nav-links">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-side">
            <ThemeToggle />
            <button
              className="nav-burger"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-menu">
          <p className="label">Navigation</p>
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
