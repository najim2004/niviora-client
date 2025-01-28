"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FC, useState } from "react";
import { ProductCardProps } from "./types";

export const ProductCard: FC<ProductCardProps>=({
  title = "Ahava Mineral Hand Cream - Sea-Kissed",
  price = 24.0,
  originalPrice = 28.0,
  imageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ILenJQVlZPeq6ishtv2ykINbWARIL3.png",
})=> {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="w-full max-w-[300px] h-[450px] overflow-hidden hover:border-gray-400">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="relative flex-grow">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute left-0 top-0 z-10 p-2 transition-colors hover:text-primary"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorite ? "fill-current text-primary" : "text-gray-400"
              }`}
            />
          </button>
          <div className="relative aspect-square w-full">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">${price.toFixed(2)}</span>
            <span className="text-sm text-primary line-through">
              ${originalPrice.toFixed(2)}
            </span>
          </div>
          <Button className="w-full rounded-full hover:bg-primary active:bg-primary hover:text-white" variant="outline">
            Add to cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
