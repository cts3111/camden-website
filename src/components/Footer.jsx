export default function Footer() {
  return (
    <footer className="footer">
      <span className="label">© {new Date().getFullYear()} Camden Sun</span>
      <span className="label">Los Angeles, CA</span>
      <span className="label">Built with React · Vercel</span>
    </footer>
  );
}
