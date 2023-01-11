import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { SocialIcon } from "react-social-icons";

interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <header className=" bg-[#3333]/20 rounded-full sm:rounded-sm md:rounded-md drop-shadow-lg sm:filter-none sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-25 xl:items-center p-5">
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
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          className="cursor-pointer  h-5 w-5 mr-3 hover:animate-spin"
          network="email"
          fgColor="#f7abbaab"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-grey-400 ">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
