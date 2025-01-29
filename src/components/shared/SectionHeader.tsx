import React from "react";

const SectionHeader = ({
  firstTitle,
  lastTitle,
  description,
}: {
  firstTitle: string;
  lastTitle: string;
  description: string;
}) => {
  return (
    <header className="container mx-auto px-5 py-4 md:py-12">
      <div className="flex flex-col justify-center text-center px-4 md:px-0">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-text mb-4 animate-fade-in">
          {firstTitle} <span className="text-rose-500">{lastTitle}</span>
        </h3>
        <p className="text-base md:text-lg text-secondary-text leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </header>
  );
};

export default SectionHeader;
