import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className=" bg-[#221b1b33]/40 rounded-full sm:rounded-sm md:rounded-md drop-shadow-[#f7abba]-lg sm:filter-none sticky top-0 flex  items-start justify-between min-h-0 max-w z-999999 xl:items-center p-5 z-9999">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons*/}
        <SocialIcon
          url="https://www.linkedin.com/in/haluskua-77/"
          fgColor="#e48ac1d2"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/haluskua-77/"
          fgColor="#64bcf7ab"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/haluskua-77/"
          fgColor="#ece38cab"
          bgColor="transparent"
        />
      </motion.div>
      {/* <div> */}
      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="drop-shadow-3xl min-w-max flex flex-row items-center text-[#fff9f9] cursor-pointer rounded-full  p-2 bg-[#60adf5] hover:bg-[#a7fa70] hover:text-white z-9999999"
        >
          <SocialIcon
            className="cursor-pointer  h-5 w-5 mr-3 hover:animate-bounce motion-reduce"
            network="email"
            fgColor="#e9d0d5ab"
            bgColor="transparent"
          />
          <span className="uppercase hidden md:inline-flex text-sm hover:text-white ">
            Get In Touch
          </span>
        </motion.div>
      </Link>
      {/* </div> */}
    </header>
  );
};

export default Header;
