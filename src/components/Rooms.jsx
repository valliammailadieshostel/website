import { useState } from "react";
import { rooms, whatsappLink } from "../data.js";

const filters = [
  { label: "All", value: "All" },
  { label: "Room Type", value: "Room" },
  { label: "Hall Type", value: "Hall" },
];

export default function Rooms() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? rooms : rooms.filter((r) => r.type === filter);

  return (
    <section id="rooms" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Choose your room</h2>
        <p className="section__lead">Transparent monthly pricing. Meals and Wi-Fi included.</p>

        <div className="filters" role="tablist">
          {filters.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={filter === f.value}
              className={`chip ${filter === f.value ? "chip--active" : ""}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid--4">
          {visible.map((room) => (
            <article key={room.id} className="card room">
              <div className="room__image" style={{ background: room.color }}>
                <span>{room.emoji}</span>
              </div>
              <div className="room__body">
                <span className={`type-badge type-badge--${room.type.toLowerCase()}`}>
                  {room.type} Type
                </span>
                <h3>{room.name}</h3>
                <p className="muted">{room.sharing}</p>
                <ul className="tags">
                  {room.amenities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <div className="room__footer">
                  <div>
                    <strong className="price">₹{room.price.toLocaleString("en-IN")}</strong>
                    <span className="muted"> / month</span>
                  </div>
                  <a
                    href={whatsappLink(`Hi! I am interested in the ${room.name}. Is it available?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--small btn--whatsapp"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
