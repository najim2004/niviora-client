import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { Testimonial } from "./types";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    const { name, image, text, rating } = testimonial;

    return (
        <Card className="relative h-[300px] p-6 transition-shadow duration-300">
            <CardContent className="h-full flex flex-col justify-between p-0">
                    {/* Profile Image */}
                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 flex justify-center">
                        <div className="relative size-28 rounded-full overflow-hidden border bg-gray-50">
                            <Image
                                src={image || "/placeholder.svg"}
                                alt={name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                <div className="space-y-4 mt-10">

                    {/* Name and Role */}
                    <div className="text-center space-y-2">
                        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
                        <p className="text-sm text-muted-foreground">Customer</p>
                    </div>

                    {/* Testimonial Text */}
                    <div className="max-h-[160px] overflow-y-auto">
                        <p className="text-center text-muted-foreground">{text}</p>
                    </div>
                </div>

                {/* Star Rating */}
                <div className="flex justify-center gap-1 pt-4">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${
                                i < rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "fill-gray-200 text-gray-200"
                            }`}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
