"use client";

import { FC, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import model from "../../../../public/assets/home/model.png";

export const Newsletter: FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className=" bg-rose-900">
      <div className="gap-8 md:gap-0 px-4 grid md:grid-cols-2 md:items-center justify-center container mx-auto w-full overflow-hidden  min-h-[500px] font-roboto mt-10 lg:mt-20">
        {/* Image */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-lg md:h-[550px]">
          <Image
            src={model}
            alt="Skincare beauty"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-center text-">
            Stay Glowing with <span className="text-white">NIVIORA</span>
          </h2>
          <p className="text-lg text-white text-center">
            Sign up for exclusive offers, skincare tips, and the latest updates.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex max-w-md mx-auto bg-white border p-1 h-12 rounded-md"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-full border-none shadow-none ring-0 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="h-full bg-rose-500 text-white border-none shadow-none rounded-md"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
