import { socialMediaIcons } from "@/lib/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t p-2 border-gray-700">
      <div className="flex  md:flex-row flex-col justify-between items-center px-10 gap-5">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Chidubem Desmond
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMediaIcons.map(({ id, Icon, path }) => (
            <Link
              href={path}
              key={id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center bg-gradient-to-r from-[#0C0E23] to-[#050112] bg-black-200 rounded-lg "
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
