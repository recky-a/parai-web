import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  ChevronRight,
  Heart,
} from "lucide-react";
// Import simple-icons (via react-icons)
import {
  SiInstagram,
  SiFacebook,
  SiX as SiTwitter,
  SiYoutube,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Resort awards/recognitions
  const awards = [
    { year: "2024", title: "Best Beach Resort in Bangka" },
    { year: "2023", title: "Excellence in Hospitality" },
    { year: "2022", title: "Top 10 Family Resorts" },
  ];

  // Business hours
  const businessHours = [
    { day: "Senin - Jumat", hours: "08:00 - 20:00" },
    { day: "Sabtu - Minggu", hours: "08:00 - 22:00" },
    { day: "Check-in", hours: "14:00" },
    { day: "Check-out", hours: "12:00" },
  ];

  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-accent/20 text-accent-foreground overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto py-16 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-12">
          {/* Kolom Logo & Deskripsi */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center space-x-3 transition-transform duration-300 group-hover:translate-x-1">
                <div className="relative w-12 h-12 overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-primary to-primary/80">
                  <Image
                    src="https://dummyimage.com/150x150/0EA5E9/FFFFFF&text=Parai"
                    alt="Parai Beach Resort Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="block text-xl font-bold">
                    Parai Beach Resort
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Resort & Spa
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-md">
              Nikmati surga tropis di Parai Beach Resort & Spa, Bangka.
              Pengalaman tak terlupakan dengan pantai pasir putih, fasilitas
              mewah, dan pelayanan terbaik menanti Anda.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/5 text-xs"
              >
                <MapPin className="h-3.5 w-3.5 mr-1.5" /> Peta Lokasi
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/5 text-xs"
              >
                <Phone className="h-3.5 w-3.5 mr-1.5" /> Hubungi Kami
              </Button>
            </div>
          </div>

          {/* Kolom Navigasi */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-5 pb-2 border-b border-border/50 flex items-center">
              <span className="w-1.5 h-5 bg-primary/80 rounded-full mr-2.5"></span>
              Navigasi
            </h3>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href} className="group">
                  <Link
                    href={link.href}
                    className="text-sm flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <ChevronRight className="h-3.5 w-3.5 mr-1.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Kontak */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold mb-5 pb-2 border-b border-border/50 flex items-center">
              <span className="w-1.5 h-5 bg-primary/80 rounded-full mr-2.5"></span>
              Hubungi Kami
            </h3>
            <address className="not-italic text-sm space-y-4 text-muted-foreground">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary/70 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  Jl. Pantai Parai Tenggiri, Sungailiat,
                  <br />
                  Kabupaten Bangka, Kep. Bangka Belitung
                </p>
              </div>

              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary/70 flex-shrink-0" />
                <a
                  href="tel:+6271794888"
                  className="hover:text-primary transition-colors"
                >
                  +62 717 94888
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary/70 flex-shrink-0" />
                <a
                  href="mailto:info@paraibeachresort.com"
                  className="hover:text-primary transition-colors"
                >
                  info@paraibeachresort.com
                </a>
              </div>
            </address>
          </div>

          {/* Kolom Jam Operasional (Menggantikan Newsletter) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold mb-5 pb-2 border-b border-border/50 flex items-center">
              <span className="w-1.5 h-5 bg-primary/80 rounded-full mr-2.5"></span>
              Jam Operasional
            </h3>
            <div className="space-y-3">
              {businessHours.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 mr-2 text-primary/70" />
                    {item.day}
                  </div>
                  <span className="font-medium">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border/30">
              <h4 className="text-sm font-medium mb-3 flex items-center">
                <Award className="h-4 w-4 mr-2 text-amber-500" />
                Penghargaan
              </h4>
              <div className="space-y-2">
                {awards.map((award, index) => (
                  <div key={index} className="flex text-xs">
                    <span className="text-primary font-medium mr-2">
                      {award.year}
                    </span>
                    <span className="text-muted-foreground">{award.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider with decorative element */}
        <div className="relative flex items-center py-6 my-2">
          <div className="flex-grow border-t border-border/50"></div>
          <div className="mx-4 flex items-center text-muted-foreground/30">
            <Heart className="h-4 w-4 text-primary/40" />
          </div>
          <div className="flex-grow border-t border-border/50"></div>
        </div>

        {/* Bagian Bawah Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} Parai Beach Resort & Spa. Hak Cipta
              Dilindungi.
            </p>
            <div className="flex gap-4 mt-2 text-xs">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-primary transition-colors"
              >
                Peta Situs
              </Link>
            </div>
          </div>

          <div className="flex gap-5">
            <Link
              href="https://instagram.com/parai_bangka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Parai Bangka"
              className="group"
            >
              <div className="h-9 w-9 rounded-full border border-border/50 flex items-center justify-center bg-background/80 hover:bg-primary/10 hover:border-primary/50 transition-colors duration-300">
                <SiInstagram className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
            <Link
              href="#" // Replace with actual Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Parai Bangka"
              className="group"
            >
              <div className="h-9 w-9 rounded-full border border-border/50 flex items-center justify-center bg-background/80 hover:bg-primary/10 hover:border-primary/50 transition-colors duration-300">
                <SiFacebook className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
            <Link
              href="#" // Replace with actual Twitter/X URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Parai Bangka"
              className="group"
            >
              <div className="h-9 w-9 rounded-full border border-border/50 flex items-center justify-center bg-background/80 hover:bg-primary/10 hover:border-primary/50 transition-colors duration-300">
                <SiTwitter className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
            <Link
              href="#" // Replace with actual YouTube URL
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Parai Bangka"
              className="group"
            >
              <div className="h-9 w-9 rounded-full border border-border/50 flex items-center justify-center bg-background/80 hover:bg-primary/10 hover:border-primary/50 transition-colors duration-300">
                <SiYoutube className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
