import { profile } from "../../data/content.js";

export default function ContactSection() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    {
      label: "GitHub",
      value: `@${profile.githubHandle}`,
      href: profile.github,
    },
    {
      label: "LinkedIn",
      value: profile.linkedinHandle,
      href: profile.linkedin,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    },
  ];

  return (
    <section id="contact" className="section light">
      <div className="section-inner">
        <p className="label">03. Contact</p>
        <h2 className="sec-title">
          Say <em>Hello</em>
        </h2>
        <p className="contact-line">
          Open to internships &amp; entry-level data analytics and data science
          roles, Fall 2026.
        </p>

        <div className="c-rows">
          {items.map((it) => (
            <a
              key={it.label}
              className="c-row"
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <span className="label">{it.label}</span>
              <span className="value">{it.value}</span>
              <span className="arr">→</span>
            </a>
          ))}
        </div>

        <footer className="footer">
          <span className="label">© {new Date().getFullYear()} Camden Sun</span>
          <span className="label">Los Angeles, CA</span>
          <span className="label">Built with React · Vercel</span>
        </footer>
      </div>
    </section>
  );
}
