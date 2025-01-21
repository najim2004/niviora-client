export interface Feature {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

export interface BannerProps {
  title: string;
  subtitle: string;
  description: string;
  productImage: string;
  features: Feature[];
}
