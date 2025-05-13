
# <div align="center">🏖️ Parai Beach Resort & Spa - Web Experience 🌊</div>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15.3.2-black?logo=next.js" alt="Next.js"></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-19.0.0-blue?logo=react" alt="React"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css" alt="Tailwind CSS"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript"></a>
</p>

<p align="center">
  Welcome to the official web experience for <a href="https://parai-web.vercel.app/">Parai Beach Resort & Spa</a>! ✨ Explore our beautiful resort, discover luxurious accommodations, browse our top-notch facilities, and start planning your dream getaway.
</p>

<p align="center">
   <a href="https://parai-web.vercel.app/">
     <img src="public/images/screenshots/homepage.png" alt="Parai Resort Homepage Showcase" width="80%">
   </a>
  <em><p align="center">*A glimpse of the Parai Resort Homepage*</p></em>
</p>

## 🚀 Key Features

This website is designed to provide a comprehensive and delightful experience, showcasing:

- **🖼️ Engaging Homepage Hero:** A dynamic carousel that immediately captures the essence and beauty of Parai Resort.

- **🛌 Elegant Accommodations:** Detailed listings of our rooms and suites, complete with vivid descriptions, image placeholders, comprehensive amenities, and transparent pricing. Start your booking journey here!

- **🏢 facilities** **Unparalleled Resort Facilities:** Discover the extensive amenities that await you, from our pristine private beach and refreshing outdoor swimming pool to our exquisite restaurant & bar, rejuvenating spa & fitness services, and versatile meeting/event spaces.

- **🏞️ Visual Gallery:** Immerse yourself in the beauty of Parai Resort through our categorized image gallery (Beach, Facilities, Rooms, Dining, Activities, Resort). Enjoy a lightbox feature for a closer look at each moment.

- **🗓️ Seamless Booking Interface:** An intuitive form that allows guests to easily check room availability based on their desired check-in/check-out dates, number of guests, and preferred room type. _(Demo functionality for availability)_

- **🗣️ Guest Experiences:** A rotating carousel featuring authentic or sample testimonials from our delighted guests, building trust and showcasing the Parai experience.

- **🗺️ Contact & Location Made Easy:** A dedicated page with a direct contact form, comprehensive contact details (address, phone, email), and an integrated Google Map to guide you to our paradise.

- **✉️ Stay Updated:** An elegantly designed newsletter signup component, inviting guests to subscribe for the latest updates, exclusive offers, and exciting news from Parai Resort.

- **📱 Fully Responsive:** Experience a seamless and intuitive website across all devices – desktops, tablets, and smartphones.

- **🌙 Dark Mode Option:** Enjoy the flexibility of switching between light and dark themes for a comfortable browsing experience, day or night.

- **💬 Instant Inquiry:** A convenient WhatsApp Floating Action Button (FAB) for quick and easy communication with our team.

- **📤 Effortless Sharing:** Easily share the "Contact Us" page with friends and family via various social media platforms.

## 🛠️ Built With

This project leverages a cutting-edge technology stack for optimal performance and a delightful user experience:

- **Frontend Framework:** [Next.js](https://nextjs.org/) `15.3.2` _(Powered by Turbopack)_
- **UI Library:** [React](https://reactjs.org/) `19.0.0`
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) `4`
- **Language:** [TypeScript](https://www.typescriptlang.org/) `5`
- **Component Library:** [Shadcn UI](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Code Quality:** ESLint
- **Animations:** `tw-animate-css`
- **Carousels:** [`embla-carousel-react`](https://www.embla-carousel.com/react/) & Plugins (`embla-carousel-autoplay`, `embla-carousel-auto-height`)
- **Date Utilities:** [`date-fns`](https://date-fns.org/)
- **Social Sharing:** [`react-share`](https://github.com/nygardk/react-share)

## ⚙️ Getting Started

Ready to run this project locally? Follow these simple steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (Version `18.18.0` or later recommended - check `package.json` for specific engine requirements)
- npm, yarn, or pnpm (choose your preferred package manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/recky-a/parai-web.git
   cd parai-web
   ```

2.  **Install dependencies:**

      - **Using npm:**

        ```bash
        npm install
        ```

      - **Using yarn:**

        ```bash
        yarn install
        ```

      - **Using pnpm:**

        ```bash
        pnpm install
        ```

## 🏃 Running the Development Server

To start the development server and see the magic happen:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open your browser and navigate to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to experience the Parai Resort website in development mode.

### Other Useful Commands:

  - **Build for Production:**

    ```bash
    npm run build
    ```

  - **Start Production Server:**

    ```bash
    npm run start
    ```

  - **Run ESLint:**

    ```bash
    npm run lint
    ```

## 📂 Project Structure

Here's a quick look at the main directories and their purpose:

```
parai-web/
├── app/
│   ├── booking/         # Booking page and related components
│   ├── fasilitas/       # Facilities page
│   ├── galeri/         # Gallery page
│   ├── kamar-suite/     # Rooms & Suites listing page
│   ├── kontak-kami/     # Contact Us page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── global/         # Global components (Navbar, Footer, WhatsAppFAB, NewsletterSignup)
│   ├── sections/       # Page-specific section components
│   │   └── beranda/    # Homepage specific sections
│   ├── ui/             # Reusable UI components (Shadcn UI)
│   ├── mode-toggle.tsx # Dark/Light mode toggle
│   └── theme-provider.tsx # Theme provider for Next-Themes
├── lib/
│   ├── data.ts         # Static data (rooms, testimonials, gallery, navigation)
│   └── utils.ts        # Utility functions (e.g., class name merging)
├── public/           # Static assets (images, fonts)
├── .github/          # (Recommended) GitHub specific files
├── next.config.ts    # Next.js configuration
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
├── eslint.config.mjs  # ESLint configuration
├── postcss.config.mjs # PostCSS configuration (Tailwind CSS)
├── components.json   # Shadcn UI configuration
└── README.md         # This very file!
```

## 🖼️ Screenshots

Get a visual taste of the website:

**Homepage:**

> Description: The main landing page featuring a captivating hero carousel and introductory sections.

**Kamar & Suite Page:**

> Description: A detailed listing of our available rooms and suites, complete with images and essential information.

**Booking Page:**

> Description: The user-friendly interface for checking room availability and initiating the booking process.

**Galeri Page (Mobile View):**

> Description: A glimpse of the resort's beauty showcased in a mobile-responsive photo gallery.

## 🤝 Contributing

We welcome contributions\! If you have ideas for improvements or encounter any bugs, please follow these guidelines:

1.  **Fork the Project** on GitHub.
2.  **Create your Feature Branch:** `git checkout -b feature/YourAmazingFeature`
3.  **Commit your Changes:** `git commit -m 'Add some AmazingFeature'`
4.  **Push to the Branch:** `git push origin feature/YourAmazingFeature`
5.  **Open a Pull Request** on the main repository.

Please ensure your code adheres to our linting rules by running `npm run lint` before submitting your pull request. For more detailed contribution guidelines, consider adding a `CONTRIBUTING.md` file.

## 🌱 Community, Support & Contribution

We aim to foster a welcoming and collaborative community.
-   **Support:** For help with the project, please see our [Support Guidelines](./.github/SUPPORT.md).
-   **Contributing:** We welcome contributions! Please read our [Contributing Guidelines](./.github/CONTRIBUTING.md).
-   **Code of Conduct:** All participants are expected to uphold our [Code of Conduct](./.github/CODE_OF_CONDUCT.md).
-   **Security:** To report a security vulnerability, please follow our [Security Policy](./.github/SECURITY.MD).

## 📜 License

This project is licensed under the **MIT License**. See the [`LICENSE`](https://www.google.com/search?q=LICENSE) file for more details.

## 🙏 Acknowledgements

We extend our sincere gratitude to the following open-source projects and communities that made this web experience possible:

  - [Shadcn UI](https://ui.shadcn.com/) for the incredible collection of accessible and composable UI components.
  - [Lucide React](https://lucide.dev/) for the beautiful and consistent icon library.
  - [Unsplash](https://unsplash.com/) and other image sources for providing stunning placeholder and demo images.
  - The [Next.js](https://nextjs.org/) and [React](https://reactjs.org/) teams for their powerful and developer-friendly frameworks.
  - [Vercel](https://vercel.com/) for providing excellent deployment services.
