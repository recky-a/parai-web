// components/sections/beranda/AboutSummary.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Building, Trees, Waves } from "lucide-react";

export function AboutSummary() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-primary">
              Tentang Parai Beach Resort & Spa
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Parai Beach Resort & Spa adalah destinasi impian di Pulau Bangka,
              menawarkan perpaduan sempurna antara keindahan alam, kemewahan,
              dan keramahan khas Indonesia. Terletak di tepi pantai berpasir
              putih dengan air laut yang jernih, resort kami adalah tempat ideal
              untuk liburan romantis, perjalanan keluarga, maupun acara bisnis.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nikmati beragam fasilitas unggulan, mulai dari kamar dan suite
              yang elegan, restoran dengan hidangan lezat, hingga spa yang
              memanjakan untuk relaksasi total.
            </p>
            <Button asChild size="lg">
              <Link href="/tentang-kami">Selengkapnya Tentang Kami</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
                alt="Lobi Hotel yang Mewah dan Terang"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg mt-8">
              <Image
                src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57"
                alt="Taman Tropis di Area Resort"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg col-span-2 -mt-8 md:mt-0">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d"
                alt="Pasangan Berjalan di Pantai Saat Senja"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-card rounded-lg shadow">
            <Waves className="h-10 w-10 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Pantai Eksklusif</h3>
            <p className="text-sm text-muted-foreground">
              Akses langsung ke pantai pasir putih yang bersih dan tenang.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow">
            <Building className="h-10 w-10 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Akomodasi Mewah</h3>
            <p className="text-sm text-muted-foreground">
              Kamar dan suite elegan dengan fasilitas modern.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow">
            <Trees className="h-10 w-10 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Lingkungan Asri</h3>
            <p className="text-sm text-muted-foreground">
              Dikelilingi taman tropis yang rimbun dan menyejukkan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
