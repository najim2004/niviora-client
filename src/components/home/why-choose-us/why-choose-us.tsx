import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import React, { FC } from "react";
import { FaAward, FaShippingFast, FaShieldAlt } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    icon: <FaAward />,
    title: "Best Quality",
    description: "100% Genuine Products",
  },
  {
    id: 2,
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    description: "Free Shipping Worldwide",
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    description: "100% Secure Payment System",
  },
];

export const WhyChooseUs: FC = () => {
  return (
    <div className="container mx-auto font-roboto mt-10 lg:mt-20 px-4 sm:px-10">
      <SectionHeader
        firstTitle="Why Choose"
        lastTitle="Our Brand"
        description="We deliver exceptional quality solutions with personalized service and
          competitive pricing. Choose us for excellence."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-16 mx-4">
        {cardData.map((item) => (
          <Card key={item.id} className="rounded-md border-none shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-center items-center gap-10">
                <div className="text-6xl text-rose-500">{item.icon}</div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-secondary-text">{item.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
