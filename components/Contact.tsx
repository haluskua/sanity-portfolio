import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

import { useForm, SubmitHandler } from "react-hook-form";
import BackgroundCircle from "./BackgroundCircle";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:haluskua.one@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="relative flex h-screen overflow-hidden flex-col top-20 text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-[#f4faff] text-1.5xl xl:text-2xl font-bold">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Always a positive journey ahead! <br />
          <span className="underline decoration-[#83a9c7]/40 font-light">
            Lets Chat
          </span>
        </h4>
        <div className="space-y-2">
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col space-y-2 w-fit mx-auto z-10"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput tracking-wider"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput tracking-wider"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput tracking-wider"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#83a9c7] py-5 px-10 rounded-md text-black font-bold text-lg cursor-pointer hover:bg-[#20c9e7] hover:drop-shadow-3xl"
          >
            Submit
          </button>
        </form>
        <BackgroundCircle />
      </div>
    </div>
  );
};

export default Contact;
