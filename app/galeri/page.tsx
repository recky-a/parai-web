"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImagesData, GalleryImage } from "@/lib/data";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Added DialogTitle for accessibility
import { Maximize } from "lucide-react";

// Ekstrak kategori unik
const categories = [
  "semua",
  ...new Set(galleryImagesData.map((img) => img.category)),
];

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "semua"
      ? galleryImagesData
      : galleryImagesData.filter((img) => img.category === selectedCategory);

  return (
    <div className="container mx-auto py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-3">
          Galeri Foto
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Jelajahi keindahan dan momen tak terlupakan di Parai Beach Resort &
          Spa.
        </p>
      </header>

      <Tabs
        defaultValue="semua"
        onValueChange={setSelectedCategory}
        className="mb-8"
      >
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-7 lg:max-w-4xl lg:mx-auto">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {filteredImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:px-4">
          {filteredImages.map((image) => (
            <Dialog
              key={image.id}
              onOpenChange={(isOpen) => !isOpen && setLightboxImage(null)}
            >
              <DialogTrigger asChild>
                <div
                  className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => setLightboxImage(image)}
                >
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Maximize className="h-8 w-8 text-white" />
                  </div>
                </div>
              </DialogTrigger>
            </Dialog>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">
          Tidak ada gambar untuk kategori &quot;{selectedCategory}&quot;.
        </p>
      )}

      {/* Lightbox Dialog Content */}
      {lightboxImage && (
        <Dialog
          open={!!lightboxImage}
          onOpenChange={(isOpen) => !isOpen && setLightboxImage(null)}
        >
          <DialogContent className="max-w-3xl p-2 sm:p-4">
            {/* Add DialogTitle for accessibility */}
            <DialogTitle className="sr-only">
              {lightboxImage.alt || "Gambar Galeri"}
            </DialogTitle>
            <div className="relative aspect-video">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className="object-contain rounded-md"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {lightboxImage.alt}
            </p>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
