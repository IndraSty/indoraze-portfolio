import React from "react";
import { portfolioList } from "@/constants/portfolioList";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const PortfolioComponent = () => {
  const truncatedPortfolioList = portfolioList.slice(0, 6);
  const PortfolioCard = ({ title, imageThumbnail, description, techStack, index }) => {
  
    const truncatedTechStack = techStack.slice(0, 3);
    return (
      <div className="w-full p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all ease-in-out duration-150 hover:shadow-lg">
        <div className="flex flex-col overflow-hidden group h-full">
          {/* image */}
          <div className="relative w-full min-h-[170px] max-h-[240px] md:min-h-[400px] xl:min-h-[220px] rounded-lg border-2 border-gray-400 flex-grow-0">
            <Image
              src={imageThumbnail}
              alt="An image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            {/* hover */}
            <div className="absolute inset-0 bg-white bg-opacity-0 rounded-lg transition-all duration-300 group-hover:bg-opacity-30 group-hover:translate-x-0 transform translate-x-[-100%] backdrop-filter backdrop-blur-lg flex items-center justify-center">
              <div className="text-center">
                <Link
                  href="#"
                  className="p-3 inline-block rounded-full bg-white border border-gray-300 hover:border-indigo-600"
                >
                  <FaGithub fontSize="1.5rem" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col z-10 mt-5 justify-between flex-grow">
            <div className="flex flex-col flex-grow-0">
              <h2 className="tracking-wider text-xl dark:text-white font-semibold">
                {title}
              </h2>
              <div className="flex flex-wrap gap-3 my-4">
                {truncatedTechStack.map(({ tech, logo }, index) => (
                  <div
                    id="badge"
                    className="inline-flex p-1 items-center gap-2 uppercase rounded-sm bg-gray-100 text-sm leading-tight font-semibold dark:bg-gray-600 dark:text-white"
                  >
                    <Image
                      src={logo}
                      width={16}
                      height={16}
                      alt="Tech Stack Logo"
                    />
                    {tech}
                  </div>
                ))}
              </div>
              <p className="mt-2 text-gray-500 text-sm dark:text-white line-clamp-2">
                {description}
              </p>
            </div>
            <div className="inline-flex gap-1 mt-4 flex-grow-0">
              <button className="mt-3 px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover">
                Details
              </button>
              <button className="mt-3 ml-3 px-3 py-2 text-base font-medium rounded-md border-2 border-primary-hover text-primary-hover hover:bg-primary-hover hover:text-white">
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };


  return (
    <section id="portfolio">
      <div className="min-h-screen w-full py-10 px-10 flex-col md:py-20 md:px-20 dark:bg-gray-900">
        {/* section title */}
        <div className="flex justify-center w-full">
          <div className="relative text-center whitespace-nowrap">
            <h1 className="text-gray-300 dark:text-gray-700 text-5xl font-bold z-10 opacity-40">
              Portfolio
            </h1>
            <h2 className="absolute left-7 top-5 text-4xl font-semibold text-black dark:text-white z-20">
              Portfolio
            </h2>
          </div>
        </div>
        {/* content section */}
        <div className="flex flex-col mt-20 md:mt-28 w-full">
          {/* section description */}
          <div className="flex flex-col w-full text-center md:text-left justify-center gap-3">
            <h2 className="text-[28px] text-primary font-semibold">
              Project I've Created
            </h2>
            <p className="text-sm dark:text-white">
              I've created a few project while i was learing about frontend
              website development. and all of project i'll explain below
            </p>
          </div>
          {/* section item portfolio */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-10 w-full">
            {truncatedPortfolioList.map(
              (
                {
                  title,
                  imageThumbnail,
                  description,
                  livePreviewURL,
                  repositoryURL,
                  techStack,
                },
                index
              ) => (
                <PortfolioCard
                  description={description}
                  techStack={techStack}
                  imageThumbnail={imageThumbnail}
                  title={title}
                  index={index}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioComponent;
