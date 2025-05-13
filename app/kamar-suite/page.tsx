// app/kamar-suite/page.tsx
import Image from "next/image";
import Link from "next/link";
import { roomsData, Room } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BedDouble, Wifi, Tv, Bath, Users, ParkingCircle } from "lucide-react"; // Contoh ikon

const AmenityIcon = ({ amenity }: { amenity: string }) => {
  if (amenity.toLowerCase().includes("ac"))
    return <BedDouble className="h-4 w-4 mr-1 text-primary" />;
  if (amenity.toLowerCase().includes("wifi"))
    return <Wifi className="h-4 w-4 mr-1 text-primary" />;
  if (amenity.toLowerCase().includes("tv"))
    return <Tv className="h-4 w-4 mr-1 text-primary" />;
  if (
    amenity.toLowerCase().includes("shower") ||
    amenity.toLowerCase().includes("bathtub")
  )
    return <Bath className="h-4 w-4 mr-1 text-primary" />;
  if (amenity.toLowerCase().includes("kamar tidur"))
    return <Users className="h-4 w-4 mr-1 text-primary" />;
  return <ParkingCircle className="h-4 w-4 mr-1 text-primary" />; // Default icon
};

export default function KamarSuitePage() {
  return (
    <div className="container mx-auto py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-3">
          Kamar & Suite Kami
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Temukan kenyamanan dan kemewahan di setiap pilihan akomodasi kami,
          dirancang khusus untuk memenuhi kebutuhan Anda.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {roomsData.map((room: Room) => (
          <Card
            key={room.id}
            id={room.id}
            className="flex pt-0 flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="p-0">
              <div className="relative aspect-video w-full">
                <Image
                  src={room.image || "/images/placeholder-room.jpg"} // Sediakan placeholder jika room.image kosong
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-xl lg:text-2xl mb-2">
                {room.name}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-4">
                {room.description}
              </CardDescription>
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-foreground">
                  Fasilitas Utama:
                </h4>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  {room.amenities.slice(0, 6).map(
                    (
                      amenity // Tampilkan maks 6 fasilitas
                    ) => (
                      <li key={amenity} className="flex items-center">
                        <AmenityIcon amenity={amenity} />
                        {amenity}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <p className="text-lg font-semibold text-primary">{room.price}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link href={`/booking?room=${room.id}`}>Pesan Sekarang</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
