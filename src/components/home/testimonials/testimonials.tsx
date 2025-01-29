"use client";

import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialCard } from "./testimonial-card";
import { testimonials } from "./temp-testimonials";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
export default function Testimonials() {
    const [api, setApi] = useState<any>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
      <section className="py-16 px-4 container mx-auto">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Why Customers Trust Us
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Our customers are at the heart of everything we do. Discover what
            they say about their experience with our products and services.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative px-4 sm:px-6 lg:px-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              slidesToScroll: 1,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pt-14"
                >
                  <div className="h-full">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden sm:flex absolute -left-4 lg:-left-8 bottom-10px" />
            <CarouselNext className="hidden sm:flex absolute -right-4 lg:-right-8 bottom-10px" />
          </Carousel>

          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  current === i ? "bg-primary w-4" : "bg-gray-300"
                )}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </div>
      </section>
    );
}
