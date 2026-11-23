// Edit this file to customise the content of the whole website.

export const hostel = {
  name: "GK & Valliammai Hostel",
  tagline: "Your home away from home",
  subtitle:
    "Safe, clean and affordable stays for students and working professionals, with meals, Wi-Fi and 24/7 security included.",
  phone: "+91 98765 43210",
  email: "valliammailadiesshostel@gmail.com",
  // WhatsApp number with country code. Change this to your real WhatsApp number.
  whatsapp: "+91 98765 43210",
  whatsappMessage: "Hi! I would like to know more about your hostel rooms and availability.",
  branches: [
    {
      name: "Valliammai Ladies Hostel",
      icon: "👩",
      addresses: [
        "3/2, Rajangam Central Veethi, Dara, Dharan Singh Colony Rd, Vadapalani, Chennai, Tamil Nadu 600026",
        "22/1, Jeevanandam Salai, Sivalingapuram, K. K. Nagar, Chennai, Tamil Nadu 600078",
        "28 1st sector, 5th St, Sector 1, K. K. Nagar, Chennai, Tamil Nadu 600078",
      ],
    },
    {
      name: "GK Mens Hostel",
      icon: "👨",
      addresses: [
        "7/19, Pillaiyar Koil St, Netaji Nagar, West Jafferkhanpet, Chennai, Tamil Nadu 600083",
      ],
    },
  ],
};

// Builds a click-to-chat link: https://wa.me/<number>?text=<message>
export const whatsappLink = (text = hostel.whatsappMessage) =>
  `https://wa.me/${hostel.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

export const stats = [
  { value: "500+", label: "Happy residents" },
  { value: "10+", label: "Years of service" },
  { value: "24/7", label: "Security & support" },
  { value: "4.8★", label: "Average rating" },
];

export const features = [
  { icon: "📶", title: "High-speed Wi-Fi", text: "Unlimited fibre internet in every room and common area." },
  { icon: "🍽️", title: "Healthy meals", text: "Breakfast, lunch and dinner cooked fresh in our hygienic kitchen." },
  { icon: "🛡️", title: "24/7 security", text: "CCTV, biometric entry and a warden on duty round the clock." },
  { icon: "🧺", title: "Laundry service", text: "Washing machines availabile." },
];

export const rooms = [
  {
    id: 1,
    name: "Hall Type",
    type: "Hall",
    price: 6500,
    amenities: ["Wi-Fi", "Shared bath", "Meals"],
    color: "linear-gradient(135deg,#ffb88c,#de6262)",
    emoji: "🛏️",
  },
  {
    id: 2,
    name: "Room Type",
    type: "Room",
    price: 7000,
    amenities: ["Wi-Fi", "Attached bath", "Meals"],
    color: "linear-gradient(135deg,#a1c4fd,#c2e9fb)",
    emoji: "🏠",
  },
  {
    id: 3,
    name: "AC Room",
    type: "Room",
    price: 8000,
    amenities: ["AC", "Wi-Fi", "Attached bath", "Meals"],
    color: "linear-gradient(135deg,#84fab0,#8fd3f4)",
    emoji: "🛋️",
  },
];

// Photos and videos for the "Photos & Videos" section. The files are in public/media/.
// type: "photo" or "video". Videos also need a `poster` (thumbnail image).
// fit: "contain" shows the whole picture without cropping (good for banners and signboards).
const BASE = import.meta.env.BASE_URL;

export const gallery = [
  { type: "photo", label: "Hall with bunk beds", src: BASE + "media/bunk-beds-hall.jpg" },
  { type: "photo", label: "Bunk bed", src: BASE + "media/bunk-bed.jpg" },
  { type: "video", label: "Room tour 1", src: BASE + "media/video-1.mp4", poster: BASE + "media/video-1-poster.jpg" },
  { type: "video", label: "Room tour 2", src: BASE + "media/video-2.mp4", poster: BASE + "media/video-2-poster.jpg" },
  { type: "photo", label: "Hostel building", src: BASE + "media/building-exterior.jpg" },
  { type: "photo", label: "Valliammai Girls PG", src: BASE + "media/valliammai-banner.jpg", fit: "contain" },
  { type: "photo", label: "Hostel signboard", src: BASE + "media/signboard-wall.jpg", fit: "contain" },
  { type: "photo", label: "Signboard on the main road", src: BASE + "media/signboard-road.jpg", fit: "contain" },
];

export const testimonials = [
  {
    name: "Ananya R.",
    role: "Engineering student",
    text: "Felt like home from day one. The food is great and the study lounge saved my exam season.",
  },
  {
    name: "Karthik M.",
    role: "Software engineer",
    text: "Fast Wi-Fi, clean rooms and a friendly warden. Easily the best hostel I have stayed in.",
  },
  {
    name: "Priya S.",
    role: "MBA student",
    text: "I always felt safe, even coming back late. The community here is wonderful.",
  },
];

export const faqs = [
  {
    q: "Are meals included in the rent?",
    a: "Yes, three meals a day are included. Vegetarian and non-vegetarian options are available.",
  },
  {
    q: "Can I visit before booking?",
    a: "Absolutely. Send us a message and we will schedule a free tour at a time that suits you.",
  },
  {
    q: "Is there a curfew?",
    a: "Gates close at 10:30 PM. Late entry is possible with prior intimation to the warden.",
  },
];
