"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
// AutoHeight might conflict with forced h-full, removed for consistency unless specifically needed
// import AutoHeight from "embla-carousel-auto-height";
import { useRef } from "react";
import { BedDouble, CalendarDays } from "lucide-react"; // Example icons

// Assuming heroImages array is defined as before
const heroImages = [
  // Use high-quality, relevant images of Parai Resort & Bangka Belitung
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    alt: "Luxury tropical resort beachfront", // More descriptive alt text
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    alt: "Hotel room balcony with ocean view",
  },
  {
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57",
    alt: "Relaxing beach chairs on white sand",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6",
    alt: "Infinity swimming pool overlooking the sea at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    alt: "Vibrant sunset over Bangka Belitung beach",
  },
  // Add more relevant, high-quality images
];

// Helper component for animated text (optional, but cleans up main component)
function AnimatedText({ children, delay = 0 }) {
  return (
    <div
      className="animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
}

export function HeroSection() {
  // Configure autoplay plugin
  const autoplay = useRef(
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true }) // Slightly longer delay, stop on interaction/hover
  );

  return (
    <section
      className="relative h-[75vh] md:h-[90vh] w-full overflow-hidden group" // Added group for hover effects on controls
      role="region"
      aria-label="Parai Resort Hero Carousel"
    >
      <Carousel
        plugins={[autoplay.current]}
        className="w-full h-full"
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {heroImages.map((img, index) => (
            <CarouselItem key={index} className="relative h-full">
              {/* Image Container */}
              <div className="relative w-full md:h-[78vh] lg:h-[80vh] min-h-[40vh]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill // Use fill to cover the container
                  className="object-cover brightness-[0.85]" // Slightly darken image directly
                  priority={index === 0} // Prioritize loading the first image
                  loading={index === 0 ? "eager" : "lazy"} // Lazy load subsequent images
                  sizes="(max-width: 768px) 100vw, 100vw" // Provide sizes attribute for optimization
                />
              </div>
              {/* Subtle Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls (Subtly styled) */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:inline-flex h-10 w-10 bg-background/40 hover:bg-background/60 text-foreground/80 hover:text-foreground border-none transition-opacity opacity-0 group-hover:opacity-100" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:inline-flex h-10 w-10 bg-background/40 hover:bg-background/60 text-foreground/80 hover:text-foreground border-none transition-opacity opacity-0 group-hover:opacity-100" />
      </Carousel>

      {/* Overlay Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary-foreground z-0 p-6">
        {/* Animated Text */}
        <AnimatedText delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 lg:mb-6 leading-tight tracking-tight [text-shadow:_1px_2px_4px_rgb(0_0_0_/_40%)]">
            Selamat Datang di Parai Beach Resort & Spa
          </h1>
        </AnimatedText>

        <AnimatedText delay={300}>
          <p className="text-base sm:text-lg md:text-xl mb-8 lg:mb-10 max-w-3xl font-light [text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]">
            Temukan surga tropis pribadi Anda di Sungai Liat, Bangka Belitung.
            Nikmati kemewahan berpadu keindahan pantai dan ketenangan alami.
          </p>
        </AnimatedText>

        {/* Buttons with slight delay */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
        >
          {/* Elegant Secondary Button */}
          <Button
            size="lg"
            asChild
            variant="outline" // Use outline for elegance
            className="bg-white/10 hover:bg-white/20 border-white/50 text-white backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03]"
          >
            <Link href="/kamar-suite">
              <BedDouble className="mr-2 h-5 w-5" />
              Lihat Kamar & Suite
            </Link>
          </Button>
          {/* Primary Button */}
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 ease-out hover:scale-[1.03]"
          >
            <Link href="/booking">
              <CalendarDays className="mr-2 h-5 w-5" />
              Booking Sekarang
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
