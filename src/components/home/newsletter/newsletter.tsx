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
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="gap-8 md:gap-0 px-4 grid md:grid-cols-2 md:items-center justify-center container mx-auto w-full overflow-hidden bg-rose-50 min-h-[500px] font-roboto">
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
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-center">
          Stay Glowing with <span className="text-[#ff6b6b]">NIVIORA</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center">
          Sign up for exclusive offers, skincare tips, and the latest updates.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex max-w-md mx-auto bg-white border p-1 h-12"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-full border-none shadow-none ring-0 outline-none focus-visible:ring-0 rounded-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="h-full bg-rose-500 text-white border-none shadow-none rounded-none"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};
