# Parai Beach Resort & Spa - Web Experience

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

Welcome to the official repository for the Parai Beach Resort & Spa website! This project showcases a modern, responsive, and elegant web experience for guests to explore our resort, view accommodations, browse facilities, and make bookings.

The live deployed version can be viewed at: [https://parai-web.vercel.app/](https://parai-web.vercel.app/)

<p align="center">
   <img src="public/images/screenshots/homepage.png" alt="Parai Resort Homepage Showcase">
  <em><p align="center">*Tampilan Halaman Utama Parai Resort*</p></em>
</p>

## ✨ Features

This website offers a comprehensive look into Parai Beach Resort & Spa, featuring:

- **Stunning Hero Section:** An engaging carousel on the homepage dynamically showcasing the beauty and allure of Parai Resort. _(app/page.tsx, components/sections/beranda/HeroSection.tsx)_
- **Detailed Room & Suite Listings:** Explore various accommodations with descriptions, image placeholders, amenities, and pricing. Each room type can be viewed, and users can initiate a booking process. _(app/kamar-suite/page.tsx, lib/data.ts)_
- **Facility Showcase:** Discover the wide range of resort amenities, including the private beach, outdoor swimming pool, restaurant & bar, spa & fitness services, and meeting/event spaces. _(app/fasilitas/page.tsx)_
- **Interactive Photo Gallery:** A visually appealing gallery where users can browse categorized images (Pantai, Fasilitas, Kamar, Kuliner, Aktivitas, Resort) of the resort and its surroundings, with a lightbox feature for larger image viewing. _(app/galeri/page.tsx, lib/data.ts)_
- **Booking System Interface:** A user-friendly form allowing guests to check room availability based on check-in/check-out dates, number of adults/children, and preferred room type. The interface provides feedback on availability (demo functionality). _(app/booking/page.tsx, app/booking/\_content.tsx)_
- **Guest Testimonials:** A carousel displaying real or sample feedback from satisfied guests, enhancing trust and appeal. _(components/sections/beranda/TestimonialCarousel.tsx, lib/data.ts)_
- **Contact & Location Information:** A dedicated contact page with a form for direct messages, detailed contact information (address, phone, email), and an embedded Google Map for easy navigation to the resort. _(app/kontak-kami/page.tsx)_
- **Newsletter Subscription:** An elegant component allowing users to subscribe to receive updates, special offers, and exclusive news. _(components/global/NewsletterSignup.tsx)_
- **Responsive Design:** Fully optimized for a seamless and intuitive user experience across desktops, tablets, and mobile devices. _(app/globals.css, various components)_
- **Dark Mode Theme:** Supports both light and dark themes, allowing users to choose their preferred visual mode, with easy toggling. _(components/mode-toggle.tsx, components/theme-provider.tsx)_
- **WhatsApp Floating Action Button (FAB):** A persistent button providing quick access for users to initiate a WhatsApp chat for inquiries. _(components/global/WhatsAppFAB.tsx)_
- **Share Functionality:** Users can share pages like "Kontak Kami" via various social media platforms. _(components/sections/beranda/ShareButtons.tsx)_

## 🚀 Tech Stack

This project is built with a modern and robust technology stack:

- **Frontend Framework:** [Next.js 15.3.2](https://nextjs.org/) (with Turbopack for development) _(package.json)_
- **UI Library:** [React 19.0.0](https://reactjs.org/) _(package.json)_
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) _(tailwind.config.ts, app/globals.css)_
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) _(tsconfig.json)_
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (as per `components.json` and `components/ui/` structure)
- **Icons:** [Lucide React](https://lucide.dev/) _(package.json, various components)_
- **Linting:** ESLint (configured in `eslint.config.mjs`)
- **Animations:** `tw-animate-css` for Tailwind-friendly Animate.css integration. _(package.json, app/globals.css)_
- **Carousels:** `embla-carousel-react` and associated plugins (`embla-carousel-autoplay`, `embla-carousel-auto-height`) for smooth and interactive carousels. _(package.json, components/ui/carousel.tsx)_
- **Date Handling:** `date-fns` for date utilities. _(package.json, app/booking/\_content.tsx)_
- **Social Sharing:** `react-share` for easy content sharing. _(package.json, components/sections/beranda/ShareButtons.tsx)_

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.18.0 or later recommended - check `package.json` engines if specified, otherwise general Next.js guidelines)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/recky-a/parai-web.git](https://github.com/recky-a/parai-web.git)
   cd parai-web
   ```

2. **Install dependencies** (as per `package.json` and `package-lock.json`):
   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

   Or using pnpm:

   ```bash
   pnpm install
   ```

## 🏃 Running the Project

To run the development server (scripts from `package.json`):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

Other available scripts:

build: Builds the application for production.
Bash

npm run build
start: Starts a Next.js production server.
Bash

npm run start
lint: Runs ESLint to check for code quality and style issues.
Bash

npm run lint
📂 Folder Structure
A brief overview of the main project directories based on the uploaded files:
parai-web/
├── app/ # Next.js App Router: Pages, layouts, global CSS
│ ├── booking/ # Booking page and related components
│ ├── fasilitas/ # Facilities page
│ ├── galeri/ # Gallery page
│ ├── kamar-suite/ # Rooms & Suites listing page
│ ├── kontak-kami/ # Contact Us page
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ └── page.tsx # Homepage
├── components/ # Reusable UI components
│ ├── global/ # Global components (Navbar, Footer, WhatsAppFAB, NewsletterSignup)
│ ├── sections/ # Components specific to page sections (Hero, About, Testimonials)
│ │ └── beranda/ # Homepage specific sections
│ ├── ui/ # Shadcn UI components (Button, Card, Carousel, Dialog, etc.)
│ ├── mode-toggle.tsx # Dark/Light mode toggle
│ └── theme-provider.tsx # Theme provider for Next-Themes
├── lib/ # Utility functions and data
│ ├── data.ts # Static data (room info, testimonials, gallery images, nav links)
│ └── utils.ts # Utility functions (e.g., cn for classnames)
├── public/ # Static assets (images, fonts, etc. - typically)
├── .github/ # (Recommended) GitHub specific files (issue templates, PR templates)
├── next.config.ts # Next.js configuration (includes image remote patterns)
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── eslint.config.mjs # ESLint configuration
├── postcss.config.mjs # PostCSS configuration (for Tailwind CSS)
├── components.json # Shadcn UI configuration
└── README.md # This file

🖼️ Screenshots

Homepage:
Description: Main landing page with hero carousel and introductory sections.

Kamar & Suite Page:
Description: Listing of available rooms and suites with images and details.

Booking Page:
Description: Interface for checking room availability and making a booking.

Galeri Page (Mobile View):
Description: Photo gallery showcasing the resort, viewed on a mobile device.

🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or want to report a bug, please follow these steps:

Fork the Project.
Create your Feature Branch (git checkout -b feature/AmazingFeature).  
Commit your Changes (git commit -m 'Add some AmazingFeature').
Push to the Branch (git push origin feature/AmazingFeature).
Open a Pull Request.

Please ensure your code adheres to the project's linting rules (run npm run lint).
For more detailed guidelines, please see CONTRIBUTING.md

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙏 Acknowledgements
Shadcn UI for the fantastic component library.
Lucide React for the clean and beautiful icons.
Unsplash and other image sources used for placeholder/demo images.
The Next.js and React teams for their powerful frameworks.
Vercel for deployment.
