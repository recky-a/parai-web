import { HeroSection } from "@/components/sections/beranda/HeroSection";
import { AboutSummary } from "@/components/sections/beranda/AboutSummary";
import { FeaturedRoomsSection } from "@/components/sections/beranda/FeaturedRoomsSection";
import { TestimonialCarousel } from "@/components/sections/beranda/TestimonialCarousel";
import { NewsletterSignup } from "@/components/global/NewsletterSignup";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarCheck, Compass, MapPin, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSummary />
      <FeaturedRoomsSection />
      <TestimonialCarousel />

      {/* Contoh Section Lain: Peta & CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/40">
        <div className="container mx-auto">
          {/* Judul Utama Seksi */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-3">
              <Compass className="inline-block h-8 w-8 mr-2 text-amber-500" />
              Temukan Oasis Tropis Anda
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kunjungi kami dan rasakan langsung pesona Parai Beach Resort &
              Spa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Kolom Kiri: Peta */}
            <div className="w-full h-[400px] md:h-full rounded-xl overflow-hidden shadow-2xl border-2 border-primary/20 hover:shadow-primary/20 transition-shadow duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.8379486762747!2d106.12206658047586!3d-1.8053124934805393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22f4e5be93c035%3A0x2136aad78d1cacef!2sParai%20Beach%20Resort%20%26%20Spa!5e0!3m2!1sen!2sid!4v1747085562971!5m2!1sen!2sid" // Pastikan ini URL embed Google Maps yang valid
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Parai Beach Resort"
              ></iframe>
            </div>

            {/* Kolom Kanan: Informasi & CTA Utama */}
            <div className="flex flex-col justify-center space-y-8 md:space-y-10 md:text-left text-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-3 text-foreground">
                  Alamat Kami
                </h3>
                <p className="text-muted-foreground mb-4 text-base lg:text-lg">
                  Jl. Pantai Parai Tenggiri, Sungailiat,
                  <br />
                  Kabupaten Bangka, Kep. Bangka Belitung
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
                >
                  <a
                    href="https://maps.app.goo.gl/YOUR_Maps_LINK" // Pastikan ini link ke Google Maps yang benar
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    Lihat di Google Maps
                  </a>
                </Button>
              </div>

              <div className="bg-card p-6 lg:p-8 rounded-xl shadow-xl border">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-primary">
                  <Sparkles className="inline-block h-7 w-7 mr-2 text-amber-400" />
                  Siap Wujudkan Liburan Impian?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto md:mx-0 text-base">
                  Jangan tunda lagi kebahagiaan Anda. Rencanakan kunjungan
                  spektakuler ke Parai Beach Resort & Spa sekarang juga dan
                  ciptakan kenangan tak terlupakan.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-primary/40 py-3 px-8 text-base"
                >
                  <Link href="/booking">
                    <CalendarCheck className="mr-2 h-5 w-5" />
                    Pesan Kamar Sekarang
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 container mx-auto">
        <NewsletterSignup />{" "}
        {/* Bisa juga ditaruh di sini, atau hanya di footer */}
      </section>

      {/* <section className="py-16 lg:py-20 bg-gradient-to-r from-primary/10 via-background to-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto p-8 bg-card rounded-xl shadow-2xl border border-border/50">
            <Heart className="mx-auto h-12 w-12 text-red-500 mb-4 animate-pulse" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-primary">
              Suka dengan Apa yang Anda Lihat?
            </h3>
            <p className="text-muted-foreground mb-6 text-base lg:text-lg">
              Bantu kami menyebarkan keindahan Parai Beach Resort & Spa! Bagikan
              website ini kepada teman, keluarga, dan kolega Anda agar mereka
              juga bisa menemukan surga tropis impian mereka. Satu klik dari
              Anda sangat berarti!
            </p>
            <ShareButtons
              title="Kunjungi Parai Beach Resort & Spa - Surga Tropis di Bangka"
              className="flex justify-center" // Menambahkan flex justify-center jika diperlukan oleh Popover
            />
            <div className="mt-8 text-sm text-muted-foreground">
              <p>
                <Gift className="inline-block h-4 w-4 mr-1 text-green-500" />{" "}
                Mungkin Anda juga ingin mengajak mereka berlibur bersama?
              </p>
              <p>
                <Users className="inline-block h-4 w-4 mr-1 text-blue-500" />{" "}
                Semakin ramai, semakin seru!
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
