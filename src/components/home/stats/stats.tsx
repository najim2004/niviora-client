import { Star, StarHalf } from "lucide-react";
import { FC } from "react";

interface StatItemProps {
    title: string;
    subtitle: string;
    isRating?: boolean;
}

const StatItem: FC<StatItemProps> = ({ title, subtitle, isRating = false }) => (
    <div className="space-y-2 transition-all duration-300 hover:transform hover:scale-105 text-center">
        <h2 className="text-4xl font-bold text-primary-text lg:text-white md:text-5xl">{title}</h2>
        {isRating && (
            <div className="flex justify-center space-x-1">
                {[...Array(4)].map((_, i) => (
                    <Star
                        key={i}
                        className="h-6 w-6 fill-yellow-400 text-yellow-400"
                        aria-hidden="true"
                    />
                ))}
                <StarHalf
                    className="h-6 w-6 fill-yellow-400 text-yellow-400"
                    aria-hidden="true"
                />
            </div>
        )}
        <p className="text-xl text-primary-text lg:text-white/90">{subtitle}</p>
    </div>
);

const StatsSection: FC = () => {
    const stats = [
        {
            title: "500,000+",
            subtitle: "Customers Worldwide",
        },
        {
            title: "1M+",
            subtitle: "Products Sold\nThis Year",
        },
        {
            title: "4.9",
            subtitle: "Customer Ratings",
            isRating: true,
        },
    ];

    return (
        <section className="w-full lg:bg-[#632727] py-5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 items-center">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            title={stat.title}
                            subtitle={stat.subtitle}
                            isRating={stat.isRating}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
