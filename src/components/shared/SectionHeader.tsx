import React from "react";

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <header className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-start">
        <h2 className="max-w-40 lg:max-w-60 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      </div>
    </header>
  );
};

export default SectionHeader;
