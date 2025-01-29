import { Card, CardContent } from "@/components/ui/card";
import React, { FC } from "react";
import { FaAward, FaShippingFast, FaShieldAlt } from "react-icons/fa";

export const WhyChooseUs: FC = () => {
    return (
      <div className="container mx-auto font-roboto mt-10 lg:mt-20">
        <div className="flex flex-col justify-center text-center px-4 md:px-0">
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary-text mb-4 animate-fade-in">
            Why Choose Our Brand
          </h3>
          <p className="text-base md:text-lg text-secondary-text leading-relaxed max-w-2xl mx-auto">
            We deliver exceptional quality solutions with personalized service
            and competitive pricing. Choose us for excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-16 mt-12 mx-4">
          <div className="">
            <Card className="rounded-md shadow-none">
              <CardContent className="p-6">
                <div className="flex justify-center items-center gap-10">
                  <div className="text-6xl text-secondary-text">
                    <FaAward />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">Best Quality</h3>
                    <p className="text-gray-600">100% Genuine Products</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="">
            <Card className="rounded-md shadow-none">
              <CardContent className="p-6">
                <div className="flex justify-center items-center gap-10">
                  <div className="text-6xl text-secondary-text">
                    <FaShippingFast />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">
                      Fast Shipping
                    </h3>
                    <p className="text-gray-600">Quick & Safe Delivery</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <Card className="rounded-md shadow-none">
              <CardContent className="p-6">
                <div className="flex justify-center items-center gap-10">
                  <div className="text-6xl text-secondary-text">
                    <FaShieldAlt />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">Warranty</h3>
                    <p className="text-gray-600">100% Return Guarantee</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
};
