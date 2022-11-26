import { motion } from "framer-motion";
import React from "react";

// http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdad.fe2d3315.jpg&w=3840&q=75

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col space-y-4 justify-evenly mx-auto items-center text-center md:text-left md:flex-row max-w-7xl px-10 overflow-hidden ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#f4faff] text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0, scale: 0 }}
        whileInView={{ x: 0, opacity: 1, scale: 0.51 }}
        transition={{ duration: 1.2 }}
        src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdad.fe2d3315.jpg&w=3840&q=75"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
      />
    </div>
  );
};

export default About;
