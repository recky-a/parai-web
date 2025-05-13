// app/fasilitas/page.tsx
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Waves,
  Utensils,
  Users,
  SunMedium,
  Dumbbell,
  Flower as Spa,
} from "lucide-react"; // Contoh ikon

interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: React.ElementType; // Komponen ikon
}

const facilitiesData: Facility[] = [
  {
    id: "pantai",
    name: "Pantai Pribadi & Olahraga Air",
    description:
      "Nikmati keindahan pantai pasir putih eksklusif kami, berjemur di bawah matahari, atau coba berbagai aktivitas olahraga air yang seru seperti snorkeling dan banana boat.",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f", // URL pantai yang lebih stabil
    icon: Waves,
  },
  {
    id: "kolam",
    name: "Kolam Renang Outdoor",
    description:
      "Segarkan diri di kolam renang outdoor kami yang luas, lengkap dengan area anak-anak dan pemandangan taman tropis yang menyejukkan.",
    image:
      "https://images.unsplash.com/photo-1663293761246-56a9b0693052?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: SunMedium,
  },
  {
    id: "restoran",
    name: "Restoran & Bar Tepi Pantai",
    description:
      "Cicipi hidangan lokal dan internasional yang lezat di restoran kami, sambil menikmati pemandangan laut yang memukau. Bar kami menyajikan koktail segar dan minuman lainnya.",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88", // URL restoran yang lebih stabil
    icon: Utensils,
  },
  {
    id: "spa",
    name: "Layanan Spa & Kebugaran",
    description:
      "Manjakan diri Anda dengan berbagai perawatan spa tradisional dan modern di pusat kebugaran kami. Fasilitas gym juga tersedia untuk menjaga rutinitas olahraga Anda.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874", // URL spa yang lebih stabil
    icon: Spa,
  },
  {
    id: "meeting",
    name: "Ruang Pertemuan & Acara",
    description:
      "Kami menyediakan ruang pertemuan yang fleksibel dan dilengkapi fasilitas modern untuk kebutuhan bisnis, seminar, atau perayaan spesial Anda.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205", // URL ruang pertemuan yang lebih stabil
    icon: Users,
  },
  {
    id: "gym",
    name: "Pusat Kebugaran",
    description:
      "Tetap bugar selama liburan dengan peralatan gym modern kami. Tersedia untuk semua tamu resort.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f", // URL gym yang lebih stabil
    icon: Dumbbell,
  },
];

export default function FasilitasPage() {
  return (
    <div className="container mx-auto py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-3">
          Fasilitas Resort
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Jelajahi beragam fasilitas unggulan yang kami sediakan untuk
          kenyamanan dan kesenangan Anda selama menginap.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {facilitiesData.map((facility) => (
          <Card
            key={facility.id}
            className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 pt-0"
          >
            <CardHeader className="p-0">
              <div className="relative aspect-video w-full">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <div className="flex items-center mb-2">
                <facility.icon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                <CardTitle className="text-xl lg:text-2xl">
                  {facility.name}
                </CardTitle>
              </div>
              <CardDescription className="text-sm text-muted-foreground line-clamp-4">
                {facility.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
