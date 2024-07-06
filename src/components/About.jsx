import React from "react";
import { TypewriterEffect } from "./ui/Typewriter-effect";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
function About() {
  const words = [{ text: "About" }, { text: "Me" }];
  const text =
    "I am a skilled full stack developer proficient in front-end and back-end technologies. With expertise in languages such as JavaScript, Python, and frameworks like React and Django, I excel in creating responsive web applications. Passionate about clean code and problem-solving, I thrive in collaborative environments where I can contribute my skills in software development and deliver high-quality solutions. ";
  return (
    <div>
      <div className="mt-28">
        <TypewriterEffect className="text-3xl" words={words} />
      </div>
      <div className=" mt-10 md:w-[400px] text-center float-right mx-10 lg:mx-32 ">
        <TextGenerateEffect words={text} className="text-center" />
        <button className=" p-4 bg-[#f237f6] text-white rounded-full font-semibold hover:text-black hover:bg-white duration-300 ">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default About;
