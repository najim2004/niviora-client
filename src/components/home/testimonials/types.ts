export interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
  isActive?: boolean;
}