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
    <section className="overflow-hidden container mx-auto lg:min-h-[calc(100vh-105px)] grid grid-cols-1 md:grid-cols-2 justify-between items-center font-roboto gap-6 md:gap-8  lg:mt-0 py-6 px-4">
      <Card className="border-none shadow-none bg-transparent w-full">
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
            <PrimaryButton
              text={"Shop Now"}
              width={"w-36"}
              height={"h-12"}
              paddingY={"py-3"}
            />
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
      <Card className="bg-transparent border-none shadow-none w-full h-full">
        <CardContent className="p-0 mx-auto h-full flex items-center justify-center">
          <div className="relative max-w-[280px] w-full md:max-w-[500px]  h-[350px] md:h-[500px] lg:max-h-[650px] lg:h-full overflow-hidden rounded-[20%]">
            <Image
              src={productImage}
              alt="Product showcase"
              fill
              className="object-content"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
