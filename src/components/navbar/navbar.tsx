"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Add this import
import { Menu, Heart, UserRound } from "lucide-react";
import { FC } from "react";

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
import { MdOutlineShoppingBag } from "react-icons/md";

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
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 font-roboto px-3 2xl:px-0">
      <div className="h-9 w-full bg-primary/10">
        <div className="container mx-auto flex h-full items-center justify-center  text-muted-foreground space-x-2">
          <a href="tel:+8801234567890" className="text-sm hover:text-primary">
            Hotline: +880 123 456 7890
          </a>
          <span>||</span>
          <a href="mailto:info@niviora.com" className="text-sm hover:text-primary">
            Email: info@niviora.com
          </a>
        </div>
      </div>
      <div className="container mx-auto flex h-16 items-center justify-between">
        <BrandLogo />
        <DesktopNavigation />
        <div className="flex items-center gap-2">
          <NavigationIcons />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

const MobileNavigation: FC = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="px-0 text-base lg:hidden"
        >
          <Menu className="size-7" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px]"
        aria-label="Mobile Navigation"
      >
        {/* Add an accessible title */}
        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

        <nav className="flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "block px-2 py-1 text-lg font-semibold text-secondary-text",
                pathname === item.href && "active text-primary"
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
const BrandLogo: FC = () => (
  <Link href="/" className="flex items-center space-x-2 text-primary-text">
    <span className="text-3xl font-bold">
      NI<span className="text-primary">VIO</span>RA
    </span>
  </Link>
);

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
                  "text-sm font-medium text-secondary-text hover:bg-transparent hover:text-primary",
                  pathname === item.href && "active text-primary"
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
  <div className="flex items-center space-x-2 md:space-x-6">
    <Link href={"#"} className="hover:bg-transparent">
      <Heart className="size-6" />
      <span className="sr-only">Wish list</span>
    </Link>
    <Link href={"#"} className="hover:bg-transparent">
      <MdOutlineShoppingBag className="size-6" />
      <span className="sr-only">Shopping cart</span>
    </Link>
    <Link href={"#"} className="hover:bg-transparent">
      <UserRound className="size-6" />
      <span className="sr-only">User account</span>
    </Link>
  </div>
);
