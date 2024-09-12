import React from "react"
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export const PortfolioCard = () => (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 transition-all ease-in-out duration-150 hover:shadow-lg">
      <div className="md:flex relative overflow-hidden group">
        {/* image */}
        <div className="relative w-full min-h-[140px] max-h-[160px]">
          <Image
            src="/assets/images/aboutimg.jpg"
            alt="An image"
            layout="fill"
            objectFit="cover"
          />
          {/* hover */}
          <div className="absolute inset-0 bg-white bg-opacity-0 transition-all rounded-tl-xl rounded-tr-xl duration-300 group-hover:bg-opacity-30 group-hover:translate-x-0 transform translate-x-[-100%] backdrop-filter backdrop-blur-lg flex items-center justify-center">
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
        <div className="p-8 relative z-10">
          <div className="uppercase tracking-wide text-sm dark:text-white font-semibold">
            My Personal Portfolio
          </div>
          <div className="block mt-1 text-lg leading-tight font-medium dark:text-white">
            Next.js, Tailwind, Framer Motion
          </div>
          <p className="mt-2 text-gray-500 dark:text-white">
            This is a personal branding project that I created using Next JS...
          </p>
          <button className="mt-3 px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Details
          </button>
          <button className="mt-3 ml-3 px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
            Preview
          </button>
        </div>
      </div>
    </div>
  );