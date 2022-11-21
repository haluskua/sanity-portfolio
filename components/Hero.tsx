import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import ProfilePic from "../public/images/0.jpg";

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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden object-cover">
      <BackgroundCircle />
      <Image
        src={ProfilePic}
        alt="Picture or owner"
        className="relative rounded-full h-72 w-72 mx-auto "
      />
      <div>
        <h2>
          {text}
          <Cursor cursorColor="pink" />
        </h2>
      </div>
    </div>
  );
};

export default Hero;
