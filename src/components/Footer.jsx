import { hostel } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">
          <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="" />
          {hostel.name}
        </span>
        <span>© {new Date().getFullYear()} {hostel.name}. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
