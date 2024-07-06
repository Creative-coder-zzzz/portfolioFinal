import React from "react";
import { TypewriterEffect } from "./ui/Typewriter-effect";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import line from "../assets/images/Line.png";

function Name() {
  const words = [
    { text: "Hi," },
    { text: "I" },
    { text: "Am" },
    { text: "Sandesh" },
    { text: "Adhikari" },
  ];
  const text =
    "I am a passionate and dedicated fullstack web developer with a strong foundation in both front-end and back-end technologies.I work remotely from Bharat ";
  return (
    // md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 mt-20

    <div className="mt-48">
      <div className="mx-5">
        <TypewriterEffect words={words} className={"text-3xl text-left"} />
        <img src={line} className="absolute mt-8" alt="" />
        <div className=" mt-5 md:w-[400px] text-center mx-4">
          <TextGenerateEffect words={text} className="text-center" />
        </div>
      </div>
    </div>
  );
}

export default Name;
