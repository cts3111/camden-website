import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export default function Nav({ menuOpen, onToggleMenu }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goHome = (e) => {
    e.preventDefault();
    if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
    else navigate("/");
  };

  const scrollTop = () => {
    if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
    else navigate("/");
  };

  return (
    <header className="nav">
      <a href="/" className="wordmark" onClick={goHome}>
        Camden Sun
      </a>

      <div className="nav-side">
        <button
          className="icon-btn"
          aria-label="Back to top"
          title="Back to top"
          onClick={scrollTop}
        >
          <span className="arr arr-1">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 20V4m0 0-6 6m6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="arr arr-2">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 20V4m0 0-6 6m6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        <button
          className={"menu-btn" + (menuOpen ? " open" : "")}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
