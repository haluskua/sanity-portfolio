import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="z-10 flex relative flex-col text-center top-20 md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-[#f4faff] text-1.5xl xl:text-2xl font-bold">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-[#f4faff] text-sm ">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
      <BackgroundCircle />
    </motion.div>
  );
}

export default Skills;
