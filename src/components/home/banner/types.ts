import { StaticImageData } from "next/image";

export interface Feature {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

export interface BannerProps {
  title: string;
  subtitle: string;
  description: string;
  productImage: StaticImageData;
  features: Feature[];
}
