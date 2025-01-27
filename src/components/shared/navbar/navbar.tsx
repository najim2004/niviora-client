"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Add this import
import { Menu, Heart, UserRound } from "lucide-react";
import { FC, useState } from "react";
import NivioraLogo from "../../../../public/assets/logo/niviora-logo1.png"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 font-roboto">
      <div className="h-9 w-full bg-rose-500 flex flex-col justify-center">
        <div className="w-full lg:container mx-auto flex items-center justify-between px-3 2xl:px-0">
          <div className="flex flex-col sm:flex-row h-full items-center  text-white space-x-2">
            <p className="text-xs md:text-sm">
              Hotline:
              <a href="tel:+8801234567890" className=" hover:text-primary-text transition-all duration-300 ease-in-out">
                {" "}
                +880 1533 338930
              </a>
            </p>
            <span className="hidden md:block">||</span>
            <p className="text-xs md:text-sm">
              Email:
              <a
                href="mailto:info@niviora.com"
                className=" hover:text-primary-text transition-all duration-300 ease-in-out"
              >
                {" "}
                niviorabd.official@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center text-white space-x-3">
            <Link
              href="https://www.facebook.com/niviorabdofficial"
              target="blank"
              className="hover:text-primary-text"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-5 w-5 fill-current" />
            </Link>
            <Link
              href="https://www.instagram.com/niviorabdofficial"
              target="blank"
              className="hover:text-primary-text"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-5 w-5 fill-current" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-b-gray-200">
        <div className="w-full lg:container mx-auto flex h-16 items-center justify-between  px-3 2xl:px-0 ">
          {/* <BrandLogo /> */}
          <Image src={NivioraLogo} alt="niviora-logo" width={150} height={150} />
          <DesktopNavigation />
          <div className="flex items-center gap-2">
            <NavigationIcons />
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

const MobileNavigation: FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <button className="px-0 text-gray-600 hover:text-rose-500 transition-all duration-300 ease-in-out lg:hidden">
          <Menu className="size-7" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px]"
        aria-label="Mobile Navigation"
      >
        <SheetTitle className="text-xl font-bold text-rose-500 mb-6">
          Menu
        </SheetTitle>

        <nav className="flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              onClick={() => setIsMenuOpen(false)}
              key={item.name}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "block px-2 py-2 text-lg font-medium text-gray-600 hover:text-rose-500 transition-all duration-300 ease-in-out",
                pathname === item.href && "text-rose-500 font-semibold"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
const DesktopNavigation: FC = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="mx-auto">
        {navigation.map((item) => (
          <NavigationMenuItem key={item.name}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-base font-medium text-gray-500 active:bg-transparent bg-transparent hover:bg-transparent hover:text-rose-500",
                  pathname === item.href && "text-rose-500"
                )}
              >
                {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const NavigationIcons: FC = () => (
  <div className="flex items-center space-x-2 md:space-x-5">
    <Link href={"#"} className="hover:bg-transparent hover:text-primary text-gray-600 transition-all duration-300 ease-in-out">
      <Heart className="size-6 " />
      <span className="sr-only">Wish list</span>
    </Link>
    <Link href={"#"} className="hover:bg-transparent hover:text-primary text-gray-800 transition-all duration-300 ease-in-out">
      <IoCartOutline className="size-6 " />
      <span className="sr-only">Shopping cart</span>
    </Link>
    <Link href={"#"} className="hover:bg-transparent hover:text-primary text-gray-600 transition-all duration-300 ease-in-out">
      <UserRound className="size-6 " />
      <span className="sr-only">User account</span>
    </Link>
  </div>
);
