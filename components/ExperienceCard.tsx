import React from "react";
import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 p-10 flex-shrink-0 w-[500px] md:w-[600] xl:w-[900px] snap-center bg-[#302317]/20 hover:opacity-100 opacity-40 cursor-pointer duration-200 overflow-hidden">
      <motion.img
        // initial={{ y: -100 }}
        // viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover"
        src="https://haluskua.github.io/mywebsite/img/okura-paintin.jpg"
        alt="painting"
      ></motion.img>
      <div className="px-2 md:px-10 ">
        <h4 className=" w-0 md:w-full text-4xl font-light">
          Frontend Developer Freelancer
        </h4>
        <p className="font-bold text-2xl mt-1">Gunter</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full object-cover "
            src="https://haluskua.github.io/mywebsite/img/my_project_portfolio1.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full object-cover "
            src="https://haluskua.github.io/mywebsite/img/my_project_portfolio1.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full object-cover "
            src="https://haluskua.github.io/mywebsite/img/my_project_portfolio1.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-yellow-100">
          Started work ... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
