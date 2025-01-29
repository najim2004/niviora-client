"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { products } from "@/components/product/product-carousel/temp-products";
import { ProductCard } from "@/components/product/product-card/product-card";

const categories = [
  { value: "popular", label: "Popular" },
  { value: "serums", label: "Serums" },
  { value: "skincare", label: "Skincare" },
  { value: "makeups", label: "Makeups" },
  { value: "toner", label: "Toner" },
];

export default function Bestsellers() {
  return (
    <section className="mt-10 lg:mt-20 px-4 container mx-auto font-roboto">
      {/* Title Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore Our <span className="text-rose-500">Bestsellers</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Handpicked favorites designed to elevate your skincare routine.
        </p>
      </div>

      {/* Categories Tabs */}
      <div className="mb-8 flex gap-8 justify-between">
        <Tabs defaultValue="serums" className="w-full overflow-auto">
          <TabsList className="w-full justify-start gap-8 h-auto bg-transparent rounded-none p-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="text-secondary-text data-[state=active]:text-rose-500 data-[state=active]:border-rose-500 
                         rounded-none border-b-2 border-transparent data-[state=active]:bg-transparent px-1 py-2 data-[state=active]:shadow-none"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* See All Button - Absolutely positioned to maintain tab list integrity */}
        <div className="">
          <Button
            variant="link"
            className="text-rose-500 font-normal hover:text-rose-600 p-0"
          >
            See All
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 8).map((product) => (
          <div className="mx-auto" key={product.id}>
            <ProductCard
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              imageUrl={product.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
