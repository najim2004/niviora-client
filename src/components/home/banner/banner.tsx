"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { BannerProps } from "./types";
import PrimaryButton from "@/components/shared/Button/PrimaryButton";
import SecondaryButton from "@/components/shared/Button/SecondaryButton";

export const Banner = ({
  title,
  subtitle,
  description,
  productImage,
  features,
}: BannerProps) => {
  return (
    <section className="relative bg-background lg:container mx-auto lg:h-[calc(100vh-105px)] flex flex-col md:flex-row justify-between items-center font-roboto gap-6 md:gap-10 lg:gap-36 mt-8 lg:mt-0 px-4">
      {/* Left Content */}
      <Card className="border-none shadow-none bg-transparent w-full lg:w-1/2">
        <CardContent className="space-y-6 p-0">
          <div className="space-y-2 md:space-y-4 flex flex-col items-center text-center lg:text-start">
            <p className="text-primary-text text-base lg:font-semibold text-center">
              {subtitle}
            </p>
            <div className="text-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-merienda font-light text-rose-500">
                {title.split(" ")[0]}
              </p>

              <p className="text-5xl md:text-6xl lg:text-8xl font-medium mt-2 md:mt-5 text-primary-text text-center">
                {title.split(" ").slice(1).join(" ")}
              </p>
            </div>
            <p className="text-secondary-text text-lg leading-relaxed max-w-md text-center">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 lg:gap-6">
            <PrimaryButton text={"Shop Now"} />
            <SecondaryButton text={"Wishlist"} />
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 max-w-[500px] mx-auto">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className="text-center group transition-all duration-300 border-none shadow-none bg-transparent mx-auto"
              >
                <CardContent className="p-2 flex justify-center items-center size-[100px] rounded-full border-2  border-dashed border-rose-500 transition-colors">
                  <p className="text-sm text-primary-text font-medium">
                    <span>{feature.title.split(" ")[0]}</span> <br />{" "}
                    <span className="text-rose-500">
                      {feature.title.split(" ").slice(1).join(" ")}
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Right Content */}
      <div className="relative h-full w-full lg:w-1/2">
        {/* Product image container */}
        <Card className="relative bg-transparent border-none shadow-none w-full h-full flex items-center p-0">
          <CardContent className="p-0 mx-auto">
            <div className="relative aspect-[3.5/4] w-full max-w-[800px] h-[300px] md:h-[500px] lg:h-[650px] overflow-hidden">
              <Image
                src={productImage}
                alt="Product showcase"
                fill
                priority
                className="object-contain rounded-[200px]"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
