import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import ProfilePic from "../public/images/dad.jpg";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name's Ompa",
      "The Guy-who-works-Construction",
      "<ButLovesToCode />",
    ],
    loop: true,
    delaySpeed: 1700,
  });
  return (
    <div className="h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircle />
      <Image
        src={ProfilePic}
        alt="Picture or owner"
        className="relative rounded-full h-48 w-48 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase pb-2 text-[#f4faff] tracking-[10px] md:tracking-[14px] py-4">
          Frontend Developer
        </h2>
        <h1 className="text-1xl lg:text-2xl uppercase font-semibold mb-2">
          <span className="mr-3 tracking-[1px]">{text}</span>
          <Cursor cursorColor="pink" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
