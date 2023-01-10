import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0, scale: 0 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative  flex-col text-left md:flex-row max-2-full px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-[#f4faff] text-1.5xl xl:text-2xl font-bold">
        Experience
      </h3>
      <div className=" w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};
export default WorkExperience;
