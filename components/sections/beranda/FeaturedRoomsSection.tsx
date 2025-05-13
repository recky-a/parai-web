// components/sections/beranda/FeaturedRoomsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { roomsData } from "@/lib/data"; // Ambil 3 kamar pertama
import { BedDouble, Bath, Wifi } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function FeaturedRoomsSection() {
  const featuredRooms = roomsData.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-muted/40">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Kamar & Suite Unggulan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pilih dari berbagai akomodasi mewah kami yang dirancang untuk
            kenyamanan maksimal Anda.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredRooms.map((room) => (
              <CarouselItem
                key={room.id}
                className="md:basis-1/2 lg:basis-1/3 p-4"
              >
                <Card className="h-full pt-0 flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video w-full h-[500px]">
                      <Image
                        src={room.image || "/images/placeholder-room.jpg"}
                        alt={room.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="text-xl lg:text-2xl mb-2">
                      {room.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {room.description}
                    </CardDescription>
                    <div className="flex items-center text-sm text-primary font-semibold mb-3">
                      {room.price}
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      {room.amenities.slice(0, 3).map((amenity) => (
                        <span
                          key={amenity}
                          className="flex items-center gap-1 bg-secondary p-1 px-2 rounded"
                        >
                          {amenity.includes("AC") && (
                            <BedDouble className="h-3 w-3" />
                          )}
                          {amenity.includes("WiFi") && (
                            <Wifi className="h-3 w-3" />
                          )}
                          {amenity.includes("Shower") && (
                            <Bath className="h-3 w-3" />
                          )}
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href={`/kamar-suite#${room.id}`}>Lihat Detail</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/kamar-suite">Lihat Semua Kamar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
