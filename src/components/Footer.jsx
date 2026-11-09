import SunMark from "./SunMark.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="foot-sun">
        <SunMark size={22} />
      </div>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Camden Sun · Built with React
      </p>
    </footer>
  );
}
