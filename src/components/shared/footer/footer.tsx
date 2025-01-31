"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import type React from "react"; // Added import for React
import { FC } from "react";
import logo from "../../../../public/assets/logo/niviora-logo1.png";
import Image from "next/image";

export const Footer: FC = () => {
  const handleCallback = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle callback request
    console.log("Callback requested");
  };

  return (
    <footer className="w-full px-4 py-12 md:px-6 lg:px-8 mt-10 lg:mt-20 font-roboto bg-white border-t-2 border-t-rose-500 rounded-3xl">
      <div className="mx-auto container space-y-8">
        <div className="grid gap-12 md:grid-cols-4 justify-center">
          {/* Brand Section */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-start">
            <Image src={logo} alt="Niviora Logo" width={120} height={96} />
            <p className="text-muted-foreground">
              At NIVIORA, we believe beauty starts with self-love. Our mission
              is to create clean, effective products for every skin type.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="rounded-md bg-primary-text/10 p-2 text-primary-text hover:bg-primary-text/20"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="rounded-md bg-primary-text/10 p-2 text-primary-text hover:bg-primary-text/20"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="rounded-md bg-primary-text/10 p-2 text-primary-text hover:bg-primary-text/20"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-primary-text">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Shop", "About Us", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary-text"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-primary-text">Support</h3>
            <ul className="space-y-2">
              {[
                "Help & FAQ",
                "Contact Us",
                "Return Policy",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary-text"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-primary-text">
              Contact Us
            </h3>
            <form
              onSubmit={handleCallback}
              className="space-y-4 flex flex-col items-center"
            >
              <Input
                type="tel"
                placeholder="Enter Your Number"
                className="h-10 w-full"
                required
              />
              <Button
                type="submit"
                className="w-full h-10 bg-rose-500 text-white hover:bg-rose-500/90"
              >
                Request a Callback
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NIVIORA. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
