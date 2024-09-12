import { skillList, toolList } from "@/constants/skillsData";
import React from "react";
import Image from "next/image";
import { FaCode, FaPencilRuler } from "react-icons/fa";

const SkillsSectionComponent = () => {
  const [isTabOn, setIsTabOn] = React.useState("Tech Stack");
  const { skillIcon, title, level } = skillList;

  const TabButton = ({ icon, title, activeTab, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center p-3 gap-3 text-base md:text-xl font-semibold ${
        activeTab === title ? "text-primary" : "dark:text-white"
      }`}
    >
      {icon} {title}
    </button>
  );

  const SkillBox = ({ icon, title, level }) => (
    <div className="flex flex-col w-32 h-32 items-center justify-between">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center w-16 h-16 dark:bg-gray-700 bg-white shadow-md rounded-full transition-transform ease-in-out duration-150 hover:-translate-y-2 hover:shadow-xl">
          <Image
            src={icon}
            alt="Skill Icon"
            width={30}
            height={30}
            objectFit="cover" // atau "cover"
          />
        </div>

        <h4 className="text-sm font-semibold dark:text-white text-center">
          {title}
        </h4>
      </div>
      <span className="text-sm font-semibold text-secondary">{level}</span>
    </div>
  );

  return (
    <section id="skills">
      <div className="min-h-screen w-full py-10 px-5 flex-col md:py-20 md:px-20 md:flex-row md:justify-between dark:bg-gray-900">
        {/* Section Title */}
        <div className="flex justify-center w-full">
          <div className="relative text-center whitespace-nowrap">
            <h1 className="text-gray-300 dark:text-gray-700 text-5xl font-bold z-10 opacity-40">
              My Skills
            </h1>
            <h2 className="absolute left-10 top-5 text-4xl font-semibold text-black dark:text-white z-20">
              My Skills
            </h2>
          </div>
        </div>
        {/* content section */}
        <div className="flex flex-col mt-20 w-full md:flex-row">
          <div className="order-2 md:order-1 mt-10 md:mt-0  flex flex-col dark:bg-gray-800 p-7 md:p-10 w-full md:w-[70%] rounded-xl shadow-xl flex-shrink-0 transition-all duration-200 ease-in-out hover:shadow-2xl">
            {/* tab button */}
            <div className="flex w-full gap-8 justify-center">
              <TabButton
                icon={<FaCode />}
                title={"Tech Stack"}
                activeTab={isTabOn}
                onClick={() => setIsTabOn("Tech Stack")}
              />
              <TabButton
                icon={<FaPencilRuler />}
                title={"Tools"}
                activeTab={isTabOn}
                onClick={() => setIsTabOn("Tools")}
              />
            </div>
            {/* content tab */}
            <div className="flex flex-col w-full mt-8 items-center justify-center">
              <div
                className={`${
                  isTabOn === "Tech Stack" ? "block" : "hidden"
                } grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-10`}
              >
                {skillList.map(({ skillIcon, title, level }, index) => (
                  <SkillBox
                    key={index}
                    icon={skillIcon}
                    level={level}
                    title={title}
                  />
                ))}
              </div>
              <div
                className={`${
                  isTabOn === "Tools" ? "block" : "hidden"
                } grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-10`}
              >
                {toolList.map(({ skillIcon, title, level }, index) => (
                  <SkillBox
                    key={index}
                    icon={skillIcon}
                    level={level}
                    title={title}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* section description */}
          <div className="md:order-2 flex flex-col w-full md:items-end justify-center md:pl-12 gap-3">
            <h2 className="text-3xl text-center text-primary font-semibold">
              Tech Stack & Tools
            </h2>
            <p className="text-sm text-center dark:text-white">
              There are some tech stack and tools that i've learned and
              experienced
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSectionComponent;
