import { navigationLinkList } from "@/constants/NavigationLinks";
import { profileData } from "@/constants/profileData";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialMediaList } from "@/constants/socialMedia";

const Footer = () => {
  const { name, divisions } = profileData;
  const SocialMediaButton = ({ SocialMediaIcon, link }) => {
    return (
      <Link
        target="_blank"
        href={`${link}`}
        className="p-3 rounded-lg bg-white text-primary transition-all ease-in-out duration-300 hover:shadow-outline-white hover:text-white hover:bg-transparent"
      >
        <SocialMediaIcon />
      </Link>
    );
  };

  const currentYear = new Date().getFullYear();
  const copyrightText = `© ${currentYear} Created by Indoraze. All right reserved`;
  return (
    <div className="w-screen flex flex-col bg-primary p-10 items-center">
      <h1 className="text-white text-2xl font-semibold tracking-wider">
        Indoraze • Portfolio
      </h1>
      <h4 className="text-xl text-white font-medium tracking-wide mt-3">
        {divisions[0]}
      </h4>
      <div className="flex flex-col gap-3 mt-10 lg:flex-row">
        {navigationLinkList.map(({ title, href }, index) => (
          <Link
            key={`#${title} - ${index}`}
            href={`/#${href}`}
            className={`p-3 text-center transition-all ease-in-out duration-200 text-white
          hover:text-primary-hover`}
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-between lg:justify-center lg:gap-6 my-16">
        {socialMediaList.map(({ SocialMediaIcon, link }, index) => (
          <SocialMediaButton SocialMediaIcon={SocialMediaIcon} link={link} />
        ))}
      </div>
      <span className="text-white text-xs">{copyrightText}</span>
    </div>
  );
};

export default Footer;
