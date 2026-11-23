import { hostel, stats } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <h1>
          {hostel.tagline}.<br />
          <span className="accent">Live comfortably.</span>
        </h1>
        <p className="hero__subtitle">{hostel.subtitle}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn">
            Contact Us
          </a>
          <a href="#rooms" className="btn btn--outline">
            View Rooms
          </a>
        </div>

        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
