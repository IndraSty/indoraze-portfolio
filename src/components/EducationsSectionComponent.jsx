import React from "react";
import { BiCalendar } from "react-icons/bi";
import { awardList, educationList } from "@/constants/educationList";
import { MdOutlineSchool } from "react-icons/md";

const EducationsSectionComponent = () => {
  const { school, competence, years } = educationList;

  const EducationsItem = ({ school, competence, years }) => (
    <div className="relative flex items-start space-x-3 w-full">
      <div className="flex flex-col space-y-2 pb-4 px-5 flex-grow">
        <h3 className="font-semibold text-lg dark:text-white">{school}</h3>
        <h4 className="font-medium dark:text-white">{competence}</h4>
        <h5 className="text-secondary flex items-center space-x-2 text-sm">
          <BiCalendar /> <span>{years}</span>
        </h5>
      </div>
      <div className="absolute left-0 top-0 w-3 h-3 transform -translate-x-4 bg-primary rounded-full"></div>
      <div className="absolute left-0 top-0 w-0.5 h-full bg-primary transform -translate-x-3"></div>
    </div>
  );

  return (
    <section id="educations">
      <div className="min-h-screen w-full py-10 px-5 flex-col md:py-20 md:px-20 dark:bg-gray-900">
        {/* Section Title */}
        <div className="flex justify-center w-full">
          <div className="relative text-center whitespace-nowrap">
            <h1 className="text-gray-300 dark:text-gray-700 text-5xl font-bold z-10 opacity-40">
              Educations
            </h1>
            <h2 className="absolute left-10 top-5 text-4xl font-semibold text-black dark:text-white z-20">
              Educations
            </h2>
          </div>
        </div>

        {/* content section */}
        <div className="flex flex-col mt-20 md:mt-28 w-full md:flex-row md:justify-between">
          {/* section description */}
          <div className="flex flex-col w-full md:w-[30%] text-center md:text-left justify-center gap-3">
            <h2 className="text-[28px] text-primary font-semibold">
              Educations & Awards
            </h2>
            <p className="text-sm dark:text-white">
              There are some formal education & awards that I've reached below
            </p>
          </div>

          {/* education and awards list */}
          <div className="mt-10 md:mt-0 flex flex-col md:flex-row items-start dark:bg-gray-800 pl-8 py-5 md:p-10 w-full md:w-[65%] rounded-xl shadow-xl flex-shrink-0 transition-all duration-200 ease-in-out hover:shadow-2xl">
            {/* education list */}
            <div className="mt-6">
              <div
                id="badge"
                className="inline-flex bg-primary items-center justify-center p-2 mb-10 gap-3 text-white rounded-md"
              >
                <MdOutlineSchool fontSize={18} />
                <span className="font-semibold uppercase text-sm">
                  Educations
                </span>
              </div>
              {educationList.map(({ school, competence, years }, index) => (
                <EducationsItem
                  key={index}
                  competence={competence}
                  school={school}
                  years={years}
                />
              ))}
            </div>

            {/* awards list */}
            <div className="mt-16 md:mt-6">
              <div
                id="badge"
                className="inline-flex bg-primary items-center justify-center p-2 mb-10 gap-3 text-white rounded-md"
              >
                <MdOutlineSchool fontSize={18} />
                <span className="font-semibold uppercase text-sm">Awards</span>
              </div>
              {awardList.map(({ award, place, years }, index) => (
                <EducationsItem
                  key={index}
                  competence={place}
                  school={award}
                  years={years}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationsSectionComponent;
