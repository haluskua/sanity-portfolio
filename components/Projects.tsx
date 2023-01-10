import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-[#f4faff] text-1.5xl xl:text-2xl font-bold">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className=" w-screen flex flex-col flex-shrink-0 snap-center space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.picture
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex "
            >
              <source
                srcSet="https://haluskua.github.io/mywebsite/img/my_project_portfolio1.png"
                type="image/png"
              />
              <img
                src="https://example.com/hero.jpg"
                alt="Landscape picture"
                width={800}
                height={500}
              />
            </motion.picture>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#9fd4ff]/50 ">
                  Case Study {i + 1} of {projects.length}:
                </span>
                Portfolio clone
              </h4>
              <p className="text-large text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                officiis alias necessitatibus, accusantium recusandae aliquam
                accusamus et consequatur cumque aut minima ipsa! Fugiat
                laboriosam sunt labore quia obcaecati porro alias reprehenderit
                illo ea.
              </p>
            </div>
          </div>
        ))}
        {/* projects */}
        {/* projects */}
        {/* projects */}
      </div>
      <div className="w-full absolute top-[30%] bg-[#998471]/20 left-0 h-[450px] -skew-y-12">
        <h5 className="text-small text-[#291a1a]/70 px-10">OHK-Designs</h5>
      </div>
    </motion.div>
  );
};

export default Projects;
