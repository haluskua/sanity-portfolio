import React from "react";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="border border-red-300 rounded-full h-[200px] w-[200px] mt-52 animate-ping absolute opacity-30" />
      {/* <div className="border absolute border-red-300 rounded-full h-[300px] w-[300px] mt-52 animate-pulse " /> */}
      <div className="border absolute border-red-300 rounded-full h-[00px] w-[700px] mt-52 animate-pulse " />
      <div className="border absolute border-red-100 rounded-full h-[800px] w-[800px] mt-52 border-[#f7abba opacity-20 animate-pulse " />
      <div className="border absolute border-red-200 rounded-full h-[950px] w-[1000px] mt-52 border-[#f7abba opacity-20 " />
    </div>
  );
}
export default BackgroundCircle;
