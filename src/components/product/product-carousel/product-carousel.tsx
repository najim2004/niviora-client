"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "./temp-products";
import { ProductCard } from "../product-card/product-card";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ProductCarousel() {
  return (
    <section className="container mx-auto px-4 mt-10 lg:mt-20">
      <SectionHeader
        title={"Our Star Products"}
        description={
          "Discover our range of premium skincare products crafted with love and science to bring out your best self."
        }
      />

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="flex justify-center items-center">
                <ProductCard
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  imageUrl={product.imageUrl}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex left-0 lg:-left-5" />
        <CarouselNext className="hidden sm:flex right-0 lg:-right-5" />
      </Carousel>
    </section>
  );
}
