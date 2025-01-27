import React from "react";
import { Banner } from "@/components/home/banner/banner";
import BannerImg from "../../public/assets/home/niviora-banner2.png"
import StatsSection from "@/components/home/stats/stats";

const features = [
  { id: "1", title: "100% Natural" },
  { id: "2", title: "Clinically Approved" },
  { id: "3", title: "Herbal Products" },
];
const Home = () => {
  return (
    <>
      <Banner title="Transform Your Skin"
        subtitle="Personal Skincare"
        description="Discover premium skincare products crafted with love and science to bring out your best self."
        productImage={BannerImg}
        features={features} />
      <StatsSection/>
    </>
  );
};

export default Home;
