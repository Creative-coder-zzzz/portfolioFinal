import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

function SocialMedia() {
  return (
    <div>
      <div className="  md:float-right mx-5 p-4 flex md:flex-col gap-3 text-4xl text-white md:text-white   md:bg-none rounded-xl  ">
        <a
          href="https://www.linkedin.com/in/sandesh-adhikari-5258822a5/"
          target="blank"
        >
          <FaLinkedin className=" duration-300 md:hover:text-[#0b0114]  hover:text-[#3CF3FF]  cursor-pointer" />
        </a>

        <a href="https://www.instagram.com/sandeshadhikarii_/" target="blank">
          <FaInstagram className="md:hover:text-[#08010f]  hover:text-[#3CF3FF] duration-300 cursor-pointer" />
        </a>

        <a href="https://github.com/Creative-coder-zzzz" target="blank">
          <FaGithub className="md:hover:text-[#2a0450]  hover:text-[#3CF3FF]  duration-300 cursor-pointer" />
        </a>

        <a
          href="https://www.facebook.com/share/iZAJb5f2AM437EqX/?mibextid=qi2Omg"
          target="blank"
        >
          <FaFacebook className="md:hover:text-[#05010a]  hover:text-[#3CF3FF]  duration-300 cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
