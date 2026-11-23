import { useEffect, useState } from "react";
import { testimonials } from "../data.js";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section id="reviews" className="section section--alt">
      <div className="container">
        <h2 className="section__title">What our residents say</h2>

        <blockquote className="quote">
          <p>“{t.text}”</p>
          <footer>
            <strong>{t.name}</strong> · <span className="muted">{t.role}</span>
          </footer>
        </blockquote>

        <div className="dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show review ${i + 1}`}
              className={`dot ${i === index ? "dot--active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
