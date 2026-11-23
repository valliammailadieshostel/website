import { whatsappLink } from "../data.js";

// Floating chat button shown in the bottom-right corner on every screen size.
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-float__icon">💬</span>
      <span className="whatsapp-float__text">Chat on WhatsApp</span>
    </a>
  );
}
