"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialsData } from "@/lib/data";
import { Star, UserCircle2 } from "lucide-react";

const renderStars = (rating: number) => {
  return Array(5)
    .fill(0)
    .map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
};

export function TestimonialCarousel() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Apa Kata Tamu Kami
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pengalaman dan kesan dari mereka yang telah menikmati layanan kami.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 p-4">
                <Card className="h-full shadow-lg">
                  <CardContent className="flex flex-col items-center text-center p-6 md:p-8 h-full">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full mb-4 border-2 border-primary"
                      />
                    ) : (
                      <UserCircle2 className="h-20 w-20 text-muted-foreground mb-4" />
                    )}
                    <h3 className="text-lg font-semibold mb-1">
                      {testimonial.name}
                    </h3>
                    <div className="flex mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
