import { Banner } from "@/components/banner/banner";
import React from "react";;

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
        productImage='https://ik.imagekit.io/golcqzkpl/anua.png?updatedAt=1737472130450'
        features={features} />
    </>
  );
};

export default Home;
