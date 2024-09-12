import React from "react";

const ImageRotate = ({ src }) => {
  return (
    <div className="relative md:w-[40%] p-5 md:p-7">
      <div className="md:bg-gradient-to-r md:from-primary md:to-red-400 rounded-2xl md:rounded-3xl">
        <img
          src={src}
          alt="Profile Image On About Section"
          className="object-cover rounded-3xl md:transition-transform md:duration-300 md:ease-in-out md:transform md:rotate-6 hover:rotate-0"
        />
      </div>
    </div>
  );
};

export default ImageRotate;
