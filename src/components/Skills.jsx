import React from "react";
import { TypewriterEffect } from "./ui/Typewriter-effect";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import { GoDotFill } from "react-icons/go";

function Skills() {
  const words = [
    {
      text: "MY",
    },
    {
      text: "SKILLS",
    },
  ];
  const text = [];
  return (
    <div>
      <TypewriterEffect words={words} className={"mt-10 text-5xl"} />

      <div
        className="md:mt-[20%] 
      lg:mt-[10%] mt-10 lg:mx-32

      md:mx-none mx-10 text-white"
      >
        <div className="flex flex-col gap-10 font-inter">
          <p>Css</p>
          <p>Bootstrap</p>
          <p>React</p>
          <p>Javascript</p>

          <div className=" absolute -mt-4 flex flex-col gap-10 mx-20 lg:mx-32 p-6">
            <div className="flex gap-4 ">
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#790A7B] text-xl" />
            </div>

            <div className="flex gap-4 ">
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#fa00ff] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300 text-[#fa00ff] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#fa00ff] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#fa00ff] text-xl" />
            </div>

            <div className="flex gap-4 ">
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#790A7B] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#790A7B] text-xl" />
            </div>

            <div className="flex gap-4 ">
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#790A7B] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#790A7B] text-xl" />
              <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#790A7B] text-xl" />
            </div>
          </div>

          <div className="md:absolute flex flex-col gap-10 md:mx-[50%]">
            <p>Node.js</p>
            <p>Express.js</p>
            <p>MongoDB</p>
            <p>Next.js</p>

            <div className=" absolute -mt-4 flex flex-col gap-10 mx-20 p-6 lg:mx-32">
              <div className="flex gap-4 ">
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#790A7B] text-xl" />
              </div>

              <div className="flex gap-4 ">
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#fa00ff] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300 text-[#fa00ff] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#fa00ff] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#fa00ff] text-xl" />
              </div>

              <div className="flex gap-4 ">
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#790A7B] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#790A7B] text-xl" />
              </div>

              <div className="flex gap-4 ">
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#FA00FF] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#790A7B] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#790A7B] text-xl" />
                <GoDotFill className="cursor-pointer hover:-mt-2 duration-300  text-[#790A7B] text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
