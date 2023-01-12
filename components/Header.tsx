import { motion } from "framer-motion";
import Link from "next/link";
import React, { ReactElement } from "react";
import { SocialIcon } from "react-social-icons";

interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <header className=" bg-[#3333]/20 rounded-full sm:rounded-sm md:rounded-md drop-shadow-[#f7abba]-lg sm:filter-none sticky top-0 flex items-start justify-between w-full mx-auto z-999999 xl:items-center p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons*/}
        <SocialIcon
          url="https://www.linkedin.com/in/haluskua-77/"
          fgColor="#f7abbaab"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/haluskua-77/"
          fgColor="#f7abbaab"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/haluskua-77/"
          fgColor="#f7abbaab"
          bgColor="transparent"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-[#fff9f9] cursor-pointer rounded-full  p-2 bg-[#54dd67cc] hover:bg-[#f7abba] hover:text-white z-999999"
        >
          <SocialIcon
            className="cursor-pointer  h-5 w-5 mr-3 hover:animate-spin"
            network="email"
            fgColor="#e9d0d5ab"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm hover:text-white ">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
