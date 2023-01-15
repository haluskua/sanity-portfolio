import React from "react";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <div className="z-0 relative flex justify-center items-center">
      <div className="z-0 border border-[rgba(151,219,240,0.38)] rounded-full h-[200px] w-[400px] mt-52 animate-spin absolute opacity-30" />
      <div className="border absolute border-[#9bd0e98c] rounded-full h-[300px] w-[500px] mt-52 border-[#77cdf0 opacity-20 animate-pulse " />
      <div className="border absolute border-[#5edaeb8c] rounded-full h-[500px] w-[800px] mt-52 border-[#88e6ec opacity-20 animate-pulse " />
    </div>
  );
}
export default BackgroundCircle;
