"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { BannerProps } from "./types";

export const Banner = ({
    title,
    subtitle,
    description,
    productImage,
    features,
}: BannerProps) => {
    return (
        <section className="relative bg-background container mx-auto lg:h-[calc(100vh-100px)] flex flex-col lg:flex-row justify-between items-center font-roboto gap-6 md:gap-10 lg:gap-36 mt-8 lg:mt-0">

            {/* Left Content */}
            <Card className="border-none shadow-none bg-transparent w-max">
                <CardContent className="space-y-6 p-0">
                    <div className="space-y-2 md:space-y-4 flex flex-col items-center text-center lg:text-start">
                        <p className="text-primary-text text-base lg:font-semibold">{subtitle}</p>
                        <div className="">
                            <p className="text-5xl md:text-6xl lg:text-7xl font-merienda font-light text-rose-500">{title.split(' ')[0]}</p>

                            <p className="text-5xl md:text-6xl lg:text-8xl font-medium mt-2 md:mt-5 text-primary-text">
                                {title.split(' ').slice(1).join(' ')}
                            </p>
                        </div>
                        <p className="text-secondary-text text-lg leading-relaxed max-w-md">
                            {description}
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-normal flex-wrap gap-4 lg:gap-6">
                        <Button
                            size="lg"
                            variant="default"
                            className="bg-rose-500 hover:bg-rose-400 text-white font-medium rounded-none text-lg px-6 py-6 shadow-lg"
                        >
                            Shop Now
                        </Button>
                        <button
                            className="gap-2 border-none flex items-center text-lg font-medium"
                        >
                            <PlayCircle className="size-10 text-rose-500 shadow-lg rounded-full hover:text-rose-400" />
                            Watch Video
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6">
                        {features.map((feature) => (
                            <Card
                                key={feature.id}
                                className="text-center group transition-all duration-300 border-none shadow-none bg-transparent mx-auto"
                            >
                                <CardContent className="p-2 flex justify-center items-center size-[100px] rounded-full border-2  border-dashed border-rose-500 transition-colors">

                                    <p className="text-sm text-primary-text font-medium">
                                        <span>{feature.title.split(' ')[0]}</span> <br /> <span className="text-rose-500">{feature.title.split(' ').slice(1).join(' ')}</span>
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Right Content */}
            <div className="relative flex-grow h-full">

                {/* Product image container */}
                <Card className="relative bg-transparent border-none shadow-none h-full flex items-center p-0">
                    <CardContent className="p-0">
                        <div className="relative aspect-[3.5/4] w-full max-w-[800px] h-[300px] lg:h-[650px] overflow-hidden">
                            <Image
                                src={productImage}
                                alt="Product showcase"
                                fill
                                priority
                                className="object-content object-center"
                                sizes="(max-width: 800px) 100vw, 50vw"

                            />
                        </div>
                        
                    </CardContent>
                    <div className="hidden lg:block absolute top-0 right-0">
                            <div className="size-[320px] relative">
                                <div className="absolute bottom-0 left-0 rotate-[20deg] flex flex-col gap-6">
                                    <div className="rounded-full size-[100px] bg-rose-50"></div>
                                    <div className="rounded-full size-[100px] bg-rose-50"></div>
                                </div>
                                <div className="absolute top-0 right-0 rotate-[20deg] flex flex-col gap-6">
                                    <div className="rounded-full size-[150px] bg-rose-50"></div>
                                    <div className="rounded-full size-[150px] bg-rose-50"></div>
                                </div>

                            </div>
                        </div>
                </Card>
            </div>

        </section>
    );
};
