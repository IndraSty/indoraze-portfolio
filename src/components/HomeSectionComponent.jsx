import { profileData } from "@/constants/profileData";
import React from "react";
import Typewriter from "typewriter-effect";
import { FaDownload } from "react-icons/fa";
import 'animate.css';

const HomeSectionComponent = () => {
  const { name, descriptions, pictures } = profileData;
  return (
    <section id="home">
      <div className="min-h-screen w-full py-32 px-5 flex flex-col md:py-52 md:px-40 md:flex-row md:justify-between dark:bg-gray-900">
        <div className="flex flex-col w-full mt-14 items-center md:w-1/3 md:items-start animate__animated animate__fadeInLeft">
          <span className="text-secondary text-base">Hi There👋</span>
          <h1 className="text-5xl leading-[55px] text-center mt-4 tracking-wide font-semibold text-primary mb-4 md:text-left">
            {name}
          </h1>
          <span className="text-2xl font-semibold my-4 dark:text-white">
            <Typewriter
              options={{
                strings: "Software Engineer",
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <p className="text-base text-secondary text-center mb-8 md:text-left">{descriptions[0]}</p>
          <button className="flex gap-4 items-center justify-center p-4 mt-4 font-medium w-52 bg-primary rounded-lg 
          text-white hover:bg-primary-hover">
              Download CV <FaDownload />
          </button>
        </div>
        <div className="flex mt-16 md:py-0 animate__animated animate__fadeInRight">
          <img src={pictures[0]} className="md:w-[550px] md:h-[430px] object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HomeSectionComponent;
