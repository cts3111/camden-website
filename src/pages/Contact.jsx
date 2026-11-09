import { profile } from "../data/content.js";

export default function Contact() {
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
    <main className="page">
      <p className="label page-kicker">03 — Contact</p>
      <h1 className="display page-title">Say Hello</h1>
      <p className="c-line">
        I&rsquo;m currently looking for internships and entry-level data
        analytics &amp; data science roles. Reach out about opportunities,
        projects, or just to say hi.
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
            <span className="arr">↗</span>
          </a>
        ))}
      </div>

      <p className="label c-note">Open to opportunities — Fall 2026</p>
    </main>
  );
}
