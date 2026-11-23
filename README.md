# Sunrise Hostel Website

A responsive hostel advertisement website built with **React** and **JavaScript** (Vite).

## Sections

- Sticky navbar with mobile menu
- Hero with call-to-action and key stats
- Facilities grid
- Room cards with category filter and pricing
- Photos and videos gallery with full-size viewer
- Auto-rotating testimonials
- FAQ accordion
- WhatsApp chat: floating button, contact-section button and a per-room "WhatsApp" enquiry button
- Footer

## Getting started

```bash
cd hostel-website
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production files are created in the `dist/` folder, ready to deploy to Netlify, Vercel, GitHub Pages or any static host.

## Customising

- **All content** (hostel name, phone, rooms, prices, FAQs, reviews) lives in `src/data.js`.
- **Colours and layout** are controlled by the CSS variables at the top of `src/styles.css`.
- **Photos and videos**: put the files in `public/media/` and list them in the `gallery` array in `src/data.js` (type `"photo"` or `"video"`; videos also need a `poster` thumbnail image). Keep videos short (under about 30 seconds) so the page loads quickly.

## Project structure

```
hostel-website/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data.js
    ├── styles.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Features.jsx
        ├── Rooms.jsx
        ├── Gallery.jsx
        ├── Testimonials.jsx
        ├── Faq.jsx
        ├── Contact.jsx
        └── Footer.jsx
```
