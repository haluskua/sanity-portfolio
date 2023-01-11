import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="flex h-screen relative flex-col text-center md:text-left md:flex-row mx-27xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-[#f4faff] text-1.5xl xl:text-2xl font-bold">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Always a positive journey ahead! <br />
          <span className="underline decoration-[#c28d3e]/50 ">Lets Chat</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text=[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+225 732 261</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text=[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">haluskua.one@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text=[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">North of Wellington</p>
          </div>
        </div>
        <form action="" className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contactInput tracking-wider"
              type="text"
            />
            <input
              placeholder="Email"
              className="contactInput tracking-wider"
              type="email"
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput tracking-wider"
            type="text"
          />

          <textarea placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
