import { hostel, whatsappLink } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="section section--dark">
      <div className="container contact">
        <h2 className="section__title">Visit us</h2>
        <p className="section__lead contact__lead">
          Call us or drop by to see the rooms. We would be happy to show you around.
        </p>

        <div className="branches">
          {(hostel.branches ?? []).map((b) => (
            <div key={b.name} className="branch">
              <h3>
                {b.icon} {b.name}
              </h3>
              <ul>
                {b.addresses.map((a) => (
                  <li key={a}>📍 {a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="contact__whatsapp">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            💬 Chat with us on WhatsApp
          </a>
          <p>Message us for room availability, fees and visit timings.</p>
        </div>

        <ul className="contact__list">
          <li>
            📞 <a href={`tel:${hostel.phone.replace(/\s/g, "")}`}>{hostel.phone}</a>
          </li>
          <li>
            ✉️ <a href={`mailto:${hostel.email}`}>{hostel.email}</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
