import React from "react";
import { Banner } from "@/components/home/banner/banner";
import BannerImg from "../../public/assets/home/niviora-banner2.png";
import StatsSection from "@/components/home/stats/stats";
import ProductCarousel from "@/components/product/product-carousel/product-carousel";
import { WhyChooseUs } from "../components/home/why-choose-us/why-choose-us";
import { TrustedBrands } from "@/components/home/trusted-brands/trusted-brands";
import Bestsellers from "@/components/home/bestsellers/bestsellers";
import Testimonials from "@/components/home/testimonials/testimonials";
import { Newsletter } from "@/components/home/newsletter/newsletter";

const features = [
  { id: "1", title: "100% Natural" },
  { id: "2", title: "Clinically Approved" },
  { id: "3", title: "Herbal Products" },
];
const Home = () => {
  return (
    <>
      <Banner
        title="Transform Your Skin"
        subtitle="Personal Skincare"
        description="Discover premium skincare products crafted with love and science to bring out your best self."
        productImage={BannerImg}
        features={features}
      />
      <StatsSection />
      <WhyChooseUs />
      <ProductCarousel />
      <TrustedBrands />
      <Bestsellers />
      <Newsletter />
      <Testimonials />
    </>
  );
};

export default Home;
