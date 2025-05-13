// parai-web/lib/data.ts

export interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  avatar?: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const roomsData: Room[] = [
  {
    id: "1",
    name: "Deluxe Ocean View",
    description:
      "Kamar mewah dengan pemandangan laut yang menakjubkan dan balkon pribadi.",
    price: "Rp 1.500.000/malam",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1770&q=80",
    amenities: [
      "AC",
      "WiFi",
      "TV LED",
      "Minibar",
      "Balkon Pribadi",
      "Shower Air Panas",
    ],
  },
  {
    id: "2",
    name: "Family Suite Garden View",
    description:
      "Suite luas dengan dua kamar tidur, cocok untuk keluarga, pemandangan taman.",
    price: "Rp 2.500.000/malam",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    amenities: [
      "2 Kamar Tidur",
      "AC",
      "WiFi",
      "TV LED",
      "Dapur Kecil",
      "Area Santai",
    ],
  },
  {
    id: "3",
    name: "Beachfront Villa",
    description:
      "Villa eksklusif tepat di depan pantai dengan akses langsung ke pasir putih.",
    price: "Rp 4.000.000/malam",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1804&q=80", // BARU
    amenities: [
      "Akses Pantai Langsung",
      "Kolam Pribadi (opsional)",
      "AC",
      "WiFi",
      "Layanan Butler",
    ],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Andi Wijaya",
    quote:
      "Pengalaman menginap yang luar biasa! Pemandangan dari kamar sangat indah dan fasilitasnya lengkap. Pelayanannya juga sangat ramah.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=60", // BARU
    rating: 5,
  },
  {
    id: "2",
    name: "Rina Lestari",
    quote:
      "Pantainya bersih dan private, cocok untuk bersantai. Spa di sini juga sangat memanjakan. Pasti akan kembali lagi!",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=60", // BARU
    rating: 5,
  },
  {
    id: "3",
    name: "Budi Santoso & Keluarga",
    quote:
      "Anak-anak sangat senang dengan kolam renang dan aktivitas di pantai. Kamar family suite sangat nyaman untuk kami sekeluarga.",
    rating: 4,
  },
];

export const galleryImagesData: GalleryImage[] = [
  {
    id: "1",
    // Original URL (was OK last time)
    src: "https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?auto=format&fit=crop&w=1770&q=80",
    alt: "Pantai tropis yang menawan",
    category: "pantai",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1649&q=80", // Replaced failing original '1561019162-e1690277d909'
    alt: "Kolam renang resort dengan pemandangan",
    category: "fasilitas",
  },
  {
    id: "3",
    // Kept updated URL (was OK)
    src: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=1770&q=80",
    alt: "Interior kamar hotel yang nyaman",
    category: "kamar",
  },
  {
    id: "4",
    // Reverted to its original URL after the updated one failed
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1770&q=80", // Replaced failing 'OQOOZkUx0rc'
    alt: "Restoran dengan suasana hangat",
    category: "kuliner",
  },
  {
    id: "5",
    // Original URL (was OK last time)
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1770&q=80",
    alt: "Ruang spa yang menenangkan",
    category: "fasilitas",
  },
  {
    id: "6",
    // URL yang diperbarui dengan format yang lebih sederhana
    src: "https://images.unsplash.com/photo-1593351415075-3bac9f45c877",
    alt: "Kayak di perairan jernih",
    category: "aktivitas",
  },
  {
    id: "7",
    // Original URL (was OK last time)
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1770&q=80",
    alt: "Perahu saat matahari terbenam di pantai",
    category: "pantai",
  },
  {
    id: "8",
    // Kept updated URL (was OK)
    src: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1770&q=80",
    alt: "Eksterior resort yang mewah",
    category: "resort",
  },
  {
    id: "9",
    // Original URL (was OK last time)
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1772&q=80",
    alt: "Kursi santai di tepi pantai",
    category: "pantai",
  },
  {
    id: "10",
    // Kept updated URL (was OK)
    src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1770&q=80",
    alt: "Kamar hotel dengan tempat tidur besar",
    category: "kamar",
  },
];

export const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/kamar-suite", label: "Kamar & Suite" },
  { href: "/fasilitas", label: "Fasilitas" },
  { href: "/galeri", label: "Galeri" },
  { href: "/booking", label: "Booking" },
  { href: "/kontak-kami", label: "Kontak Kami" },
];
