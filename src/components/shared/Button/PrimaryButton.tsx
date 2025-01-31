import React from "react";

const PrimaryButton = ({
  text,
  width,
  height,
  paddingY,
}: {
  text: string;
  width: string;
  height: string;
  paddingY: string;
}) => {
  return (
    <div className={`relative group ${width} text-center cursor-pointer`}>
      {/* Main button */}
      <span
        className={`relative z-10 block px-5 ${paddingY} overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-rose-500 rounded-lg group-hover:text-white`}
      >
        <span
          className={`absolute inset-0 w-full h-full px-5 ${paddingY} rounded-lg bg-gray-50`}
        ></span>
        <span className="absolute left-0 w-80 h-80 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-rose-500 group-hover:-rotate-180 ease"></span>
        <span className="relative">{text}</span>
      </span>
      {/* Offset border */}
      <span
        className={`absolute bottom-0 right-0 w-full ${height} -mb-0.5 -mr-0.5 transition-all duration-200 ease-linear bg-rose-500 rounded-lg group-hover:mb-0 group-hover:mr-0`}
        data-rounded="rounded-lg"
      ></span>
    </div>
  );
};

export default PrimaryButton;
