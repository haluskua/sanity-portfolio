import React, { ReactElement } from "react";
import { motion } from "framer-motion";

interface Props {
  directionLeft?: boolean;
}

function Skill({ directionLeft }: Props): ReactElement {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.picture
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <source
          srcSet="https://haluskua.github.io/mywebsite/img/room5-small.jpg"
          type="image/webp"
        />
        <img
          className=" object-cover rounded-full border-border-[#f4faff] w-24 h-auto md:w-28 md:h-28 xl:w-32 xl:h-32 border-2 filter group-hover:grayscale transition duration-300 ease-in-out"
          src="https://haluskua.github.io/mywebsite/img/room5-small.jpg"
          alt="Landscape picture"
          width={800}
          height={500}
        />
      </motion.picture>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-[#fa7691] opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
