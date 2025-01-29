import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { FC } from "react";

export const TrustedBrands: FC = () => {
  const brands = [
    {
      name: "Alibaba",
      logo: "https://1000logos.net/wp-content/uploads/2018/10/Alibaba-Logo.png",
    },
    {
      name: "Amazon",
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png",
    },
    {
      name: "Shopify",
      logo: "https://ongoingwarehouse.com/Pictures/1280px-Shopify_logo_2018.svg.webp",
    },
    {
      name: "Zapier",
      logo: "https://birkman.nyc3.cdn.digitaloceanspaces.com/production/assets/company-logos/Zapier-Logo.png",
    },
    {
      name: "Slack",
      logo: "https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png",
    },
  ];

  return (
    <section className="py-10 lg:py-16 px-4 font-roboto">
      <div className="container mx-auto">
        <SectionHeader
          firstTitle="Trusted By"
          lastTitle="Leading Brands"
          description="Niviora is proud to collaborate with industry-leading partners to
            bring you the best in skincare."
        />

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 
          items-center justify-items-center"
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="w-full max-w-[160px] mx-auto aspect-[3/2] relative group 
                transition-all duration-300 ease-in-out"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                fill
                className="object-contain filter grayscale hover:grayscale-0 
                  opacity-70 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 768px) 40vw, (max-width: 1024px) 25vw, 20vw"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
