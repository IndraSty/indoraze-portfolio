import React from "react";

const AboutExperienceCard = ({text, title}) => {
  return (
    <div className="dark:bg-gray-800 h-48 w-full md:w-52 lg:w-64 overflow-hidden border-b-2 border-primary shadow-md flex items-center rounded-xl transition-all ease-in-out duration-100 hover:shadow-outline-primary">
      <div className="md:px-4 py-7 dark:text-white text-center flex flex-col w-full h-full justify-between">
        <h2 className="font-bold text-4xl mt-6 font-Heading">{title}</h2>
        <p className="text-xl">{text}</p>
      </div>
    </div>
  )
}

export default AboutExperienceCard
