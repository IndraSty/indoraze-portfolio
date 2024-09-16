import React from "react";
import { profileData } from "@/constants/profileData";
import { BsFillChatFill } from "react-icons/bs";
import Link from "next/link";

const AboutSectionComponent = () => {
  const { pictures, region, divisions, name, descriptions } = profileData;

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

  const AboutExperienceCard = ({ text, title }) => {
    return (
      <div className="dark:bg-gray-800 h-48 w-full md:w-52 lg:w-64 overflow-hidden border-b-2 border-primary shadow-md flex items-center rounded-xl transition-all ease-in-out duration-100 hover:shadow-outline-primary">
        <div className="md:px-4 py-7 dark:text-white text-center flex flex-col w-full h-full justify-between">
          <h2 className="font-bold text-4xl mt-6 font-Heading">{title}</h2>
          <p className="text-xl">{text}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="about">
      <div className="min-h-screen w-full py-10 px-5 flex-col md:py-20 md:px-20 md:flex-row md:justify-between dark:bg-gray-900">
        <div className="flex text-center justify-center w-full">
          <div className="relative text-center">
            <h1 className="text-gray-300 dark:text-gray-700 text-5xl text-center font-extrabold z-10 opacity-30">
              About Me
            </h1>
            <h2 className="absolute left-10 top-5 text-4xl text-center font-bold text-black dark:text-white z-20">
              About Me
            </h2>
          </div>
        </div>

        <div>
          <div className="flex flex-col mt-20 md:mt-32 w-full items-center justify-between md:flex-row">
            <ImageRotate src={pictures[1]} />

            <div className="flex flex-col items-center w-full text-center mt-10 md:items-start md:text-left md:w-[50%] md:mt-0">
              <h4 className="text-3xl mb-4 font-semibold dark:text-white">
                <span className="block md:inline mb-4 md:mb-0">
                  Hello👋 i'am{" "}
                </span>
                <span className="text-primary block md:inline">{name}</span>
              </h4>

              <h5 className="text-xl mt-2 mb:mt-0 md:text-[26px] mb-8 font-semibold dark:text-white">
                A <span className="text-primary">{divisions[0]}</span> based in{" "}
                <span className="text-primary">{region}</span>{" "}
              </h5>

              <p className="text-sm md:text-lg mb-8 dark:text-white">
                {descriptions[1]}
              </p>

              <hr className="border-t-2 border-primary mb-8" />
              <div className="flex flex-col gap-5 md:flex-row w-full justify-between mb-8 md:gap-0 md:space-x-8">
                <AboutExperienceCard title="8+" text="Years Of Experience" />
                <AboutExperienceCard title="8+" text="Years Of Experience" />
                <AboutExperienceCard title="8+" text="Years Of Experience" />
              </div>

              <Link
                href={"#contact"}
                className="flex gap-4 items-center justify-center w-full p-4 mt-8 font-medium md:w-52 border-2 border-primary rounded-lg 
                  text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Me <BsFillChatFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionComponent;
