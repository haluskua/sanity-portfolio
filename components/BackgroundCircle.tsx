import React from "react";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="border border-[rgba(151,219,240,0.38)] rounded-full h-[200px] w-[400px] mt-52 animate-spin absolute opacity-30" />
      {/* <div className="border border-[#f7abba33] rounded-full h-[400px] w-[200px] mt-52 animate-spin  absolute opacity-40" /> */}
      {/* <div className="border absolute border-red-300 rounded-full h-[300px] w-[300px] mt-52 animate-pulse " /> */}
      {/* <div className="border absolute border-[#4c503c69] rounded-full h-[700px] w-[300px] mt-52 animate-pulse " /> */}
      <div className="border absolute border-[#9bd0e98c] rounded-full h-[300px] w-[500px] mt-52 border-[#77cdf0 opacity-20 animate-pulse " />
      <div className="border absolute border-[#5edaeb8c] rounded-full h-[500px] w-[800px] mt-52 border-[#88e6ec opacity-20 animate-pulse " />
      {/* <div className="drop-shadow-lg-[#f7abba] border absolute border-red-200 rounded-full h-[950px] w-[1000px] mt-52 border-[#f7abba opacity-20 " /> */}
    </div>
  );
}
export default BackgroundCircle;
