import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex text-center justify-center w-full">
    <div className="relative text-center">
    <h1 className="text-gray-300 dark:text-gray-700 text-5xl text-center font-extrabold z-10 opacity-30">
      {title}
    </h1>
    <h2 className="absolute left-10 top-1.5 text-4xl text-center font-bold text-black dark:text-white z-20">
      {title}
    </h2>
  </div>
  </div>
  );
};

export default SectionTitle;
