import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name's Gunter",
      "The Guy-who-loves-Bubble-tea",
      "<ButLovesToCode />",
    ],
    loop: true,
    delaySpeed: 1700,
  });
  return (
    <div>
      <h1>
        <span>{text}</span>;
        <Cursor cursorColor="red" />
      </h1>
    </div>
  );
};

export default Hero;
