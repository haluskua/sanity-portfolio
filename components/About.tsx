import { motion } from "framer-motion";
import React from "react";
import BackgroundCircle from "./BackgroundCircle";

const photo =
  "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdad.fe2d3315.jpg&w=3840&q=75";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col space-y-4 justify-evenly mx-auto top-20 items-center text-center md:text-left md:flex-row max-w-7xl px-10 overflow-hidden ">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-[#f4faff] text-1.5xl xl:text-2xl font-bold">
        About
      </h3>

      <BackgroundCircle />
      <motion.img
        initial={{ x: -200, opacity: 0, scale: 0 }}
        whileInView={{ x: 0, opacity: 1, scale: 0.51 }}
        transition={{ duration: 0.5 }}
        src={photo}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
      />
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">
          Here is a
          <span className="underline decoration-[#237cb8]/40 px-3 font-light">
            little
          </span>
          background about me
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          nobis odio nemo mollitia velit, modi nostrum consequatur unde debitis
          fuga excepturi, atque explicabo quis rem culpa earum laboriosam
          excepturi aliquid id explicabo odio necessitatibus corrupti,
          voluptates eligendi? Laudantium quam laborum unde ab enim non dolore,
          ratione minus accusamus quasi asperiores omnis qui neque velit
          inventore eveniet porro repellat molestiae, quaerat quis modi iure?
        </p>
      </div>
      <div className="w-full absolute top-[30%] bg-[#354564]/20 left-0 h-[450px] -skew-y-12">
        <h5 className="text-small text-[#291a1a]/70 px-10">OHK-Designs</h5>
      </div>
    </div>
  );
};

export default About;
