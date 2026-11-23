import { features } from "../data.js";

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section__title">Everything you need, included</h2>
        <p className="section__lead">
          Focus on your studies and career. We take care of the rest.
        </p>

        <div className="grid grid--3">
          {features.map((f) => (
            <article key={f.title} className="card feature">
              <div className="feature__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
