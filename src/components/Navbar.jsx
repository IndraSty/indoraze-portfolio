import React from "react";
import Link from "next/link";
import { navigationLinkList } from "../constants/NavigationLinks";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import MobileNavbarComponent from "./MobileNavbarComponent";
import 'animate.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeNavigationLink, setActiveNavigationLink] =
    React.useState("home");
  const [darkMode, setDarkMode] = React.useState(true);
  const [isBarOpen, setIsBarOpen] = React.useState(false);

  useIntersectionObserver(({ id }) => {
    setActiveNavigationLink(id);
  });

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', function() {
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    });
  }

  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`fixed flex w-full items-center justify-between
    top-0 z-[40] px-5 md:px-20 py-5 md:py-5 bg-white dark:bg-gray-900 animate__animated animate__fadeInDown ${isScrolled && "shadow-bottom"}`}
    >
      <h2 className="hidden md:block text-2xl font-medium md:text-3xl text-primary">
        Indoraze.
      </h2>
      <div className="hidden md:flex gap-4 text-base items-center font-medium">
        {navigationLinkList.map(({ title, href }, index) => (
          <Link
            key={`#${title} - ${index}`}
            href={`/#${href}`}
            className={`p-3 rounded-lg transition-all ease-in-out duration-200 
          hover:text-primary dark:hover:text-primary underline-offset-8 
          ${
            activeNavigationLink === href
              ? "text-primary underline"
              : "text-black dark:text-white"
          }`}
          >
            {title}
          </Link>
        ))}
        <span className="px-2 text-secondary-thin dark:text-gray-700">|</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 text-3xl text-primary`}
        >
          {darkMode ? <BsSunFill /> : <BsMoonFill />}
        </button>
      </div>

      {/* mobile device navbar */}
      <div className="md:hidden w-full">
        <div className="flex justify-between">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-md text-3xl text-primary shadow-md bg-white dark:bg-slate-800`}
          >
            {darkMode ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
          </button>

          <button onClick={() => setIsBarOpen(!isBarOpen)} className={`text-lg p-3 bg-primary text-white rounded-md`}>
            {isBarOpen ? <IoClose /> : <HiMenu />}
          </button>
        </div>
        <MobileNavbarComponent activeHref={activeNavigationLink} isOpen={isBarOpen} onClose={() => setIsBarOpen(!isBarOpen)} />
      </div>
    </div>
  );
}

export default Navbar;
