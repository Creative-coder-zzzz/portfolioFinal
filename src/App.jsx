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
    <>
      <Parallax pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={7}
          className="bg-gradient-to-r from-purple-500 to-violet-500"
        >
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
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <section
            className=" w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('./assets/images/About.png')] "
            ref={ref}
          >
            <About />
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.8}>
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
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.8}>
          <section
            className=" w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('./assets/images/Skills.png')] "
            ref={skill}
          >
            <div className="flex justify-center mt-"></div>
            <Skills />
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.8}>
          <section
            className=" w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('./assets/images/Contact.png')] "
            ref={contact}
          >
            <div className="flex justify-center mt-"></div>
            <Contact />
          </section>
        </ParallaxLayer>
      </Parallax>
      <div>
        <UpArrow arrow={handlearrow} className="z-0" />
      </div>
    </>
  );
}

export default App;
