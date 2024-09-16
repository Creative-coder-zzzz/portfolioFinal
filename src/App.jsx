import React, { useState, useRef, Component, useEffect } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import Header from "./components/Header";
import Name from "./components/Name";

import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import CardSlider from "./components/CardSlider";
import { cardData } from "./data/cardData";

import Skills from "./components/Skills";
import Contact from "./components/Contact";
import UpArrow from "./components/UpArrow";

function App() {
  const ref = useRef(null);
  const project = useRef(null);
  const skill = useRef(null);
  const contact = useRef(null);
  const arrow = useRef(null);

  const handleabout = () => {
    console.log("about clicked");
    ref.current.scrollIntoView({ behaviour: "smooth" });
  };
  const handleproject = () => {
    console.log("about clicked");
    project.current.scrollIntoView({ behaviour: "smooth" });
  };
  const handleskill = () => {
    console.log("about clicked");
    skill.current.scrollIntoView({ behaviour: "smooth" });
  };
  const handlecontact = () => {
    console.log("about clicked");
    contact.current.scrollIntoView({ behaviour: "smooth" });
  };
  const handlearrow = () => {
    arrow.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <div className="overflow-hidden">
      <section
        className=" w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('./assets/images/Wireframe.png')] z-10"
        ref={arrow}
      >
        <Header
          about={handleabout}
          project={handleproject}
          skill={handleskill}
          contact={handlecontact}
        />

        <Name />

        <SocialMedia />
      </section>

      <section
        className=" w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('./assets/images/About.png')] "
        ref={ref}
      >
        <About />
      </section>

      <section
        className=" w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('./assets/images/Projects.png')] "
        ref={project}
      >
        <div className="flex justify-center mt-">
          <h1 className="text-white text-3xl font-k2d font-semibold mt-5">
            MY PROJECTS
          </h1>
        </div>
        <CardSlider cards={cardData} />
      </section>

      <section
        className=" w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('./assets/images/Skills.png')] "
        ref={skill}
      >
        <div className="flex justify-center mt-"></div>
        <Skills />
      </section>

      <section
        className=" w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('./assets/images/Contact.png')] "
        ref={contact}
      >
        <div className="flex justify-center mt-"></div>
        <Contact />
      </section>

      <div>
        <UpArrow arrow={handlearrow} className="z-0" />
      </div>
    </div>
  );
}

export default App;
