import React, { useRef, useState } from "react";
import { BiMoon } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

function Header({ about, project, skill, contact, handleDarkMode, mode }) {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div className=" sticky text-white flex flex-row justify-between items-center rounded-full mt-5 md:mx-10 mx-5 gap-10  bg-black/30 backdrop-blur-3xl">
      <FaBars
        className="block md:hidden md:text-xl cursor-pointer mx-2"
        onClick={() => handleClick()}
      />

      <p className="font-k2d sm:text-lg md:text-xl p-3 ">Sandesh Adhikari</p>

      <ul className=" gap-5 md:gap-9 text-sm md:text-lg hidden md:flex">
        <li
          className="hover:text-[#378FF6] hover:underline-offset-auto font-bold cursor-pointer duration-300"
          onClick={() => handlehome()}
        >
          Home
        </li>
        <li
          className="hover:text-[#378FF6] hover:underline-offset-auto cursor-pointer duration-300"
          onClick={about}
        >
          About
        </li>
        <li
          className="hover:text-[#378FF6] hover:underline-offset-auto cursor-pointer duration-300"
          onClick={project}
        >
          Projects
        </li>
        <li
          className="hover:text-[#378FF6] hover:underline-offset-auto cursor-pointer duration-300"
          onClick={skill}
        >
          My Skills
        </li>
      </ul>

      <div className="light-dark"></div>

      <button onClick={() => handleDarkMode()}>
        {mode ? (
          <BsFillMoonFill className="" size={24}></BsFillMoonFill>
        ) : (
          <BiMoon className="" size={30}></BiMoon>
        )}
      </button>
      <button
        className="p-3 h  rounded-full mx-4 hover:scale-100 duration-500 bg-black/60 hover:bg-white hover:text-black  text-sm "
        onClick={contact}
      >
        {" "}
        Contact Me
      </button>

      {/* sidebar */}
      <div
        className={`${
          toggle
            ? `absolute md:hidden block left-0  flex-col gap-4 mt-60  p-8 border-2 rounded-xl`
            : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4">
          <li className="hover:text-[#378FF6] hover:underline-offset-auto cursor-pointer duration-300">
            Home
          </li>

          <li
            className="hover:text-[#378FF6]       hover:underline-offset-auto cursor-pointer duration-300"
            onClick={about}
          >
            About
          </li>
          <li
            className="hover:text-[#378FF6] hover:underline-offset-auto cursor-pointer duration-300"
            onClick={skill}
          >
            My Skills
          </li>
          <li
            className="hover:text-[#378FF6] hover:underline-offset-auto cursor-pointer duration-300"
            onClick={project}
          >
            Projects
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
