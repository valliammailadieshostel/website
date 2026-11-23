import { useEffect, useState } from "react";
import { gallery } from "../data.js";

export default function Gallery() {
  const [active, setActive] = useState(null);

  // While a photo/video is open: close with Escape and stop the page behind from scrolling
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 className="section__title">Photos &amp; Videos</h2>
        <p className="section__lead">See our rooms and the hostel before you visit.</p>

        <div className="gallery">
          {gallery.map((item) => (
            <button
              key={item.src}
              type="button"
              className={`gallery__item gallery__item--${item.fit ?? "cover"}`}
              onClick={() => setActive(item)}
              aria-label={`${item.type === "video" ? "Play video" : "View photo"}: ${item.label}`}
            >
              <img
                src={item.type === "video" ? item.poster : item.src}
                alt={item.label}
                loading="lazy"
              />
              {item.type === "video" && (
                <span className="gallery__play" aria-hidden="true">
                  ▶
                </span>
              )}
              <span className="gallery__caption">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          onClick={() => setActive(null)}
        >
          <button className="lightbox__close" aria-label="Close" onClick={() => setActive(null)}>
            ✕
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            {active.type === "video" ? (
              <video src={active.src} poster={active.poster} controls autoPlay playsInline />
            ) : (
              <img src={active.src} alt={active.label} />
            )}
            <figcaption>{active.label}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
