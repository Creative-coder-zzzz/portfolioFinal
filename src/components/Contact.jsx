import { React, useRef } from "react";
import { TypewriterEffect } from "./ui/Typewriter-effect";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { Result } from "postcss";
function Contact() {
  const words = [{ text: "CONTACT" }, { text: "ME" }];

  const form = useRef();

  const name = useRef();
  const email = useRef();
  const message = useRef();

  const hanldleSubmit = async () => {
    console.log(form.current);

    emailjs
      .sendForm(
        "service_yqjpvcm",
        "template_500u5a6",
        form.current,
        "g-XZoTjto484lbseB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Thank you for contacting me");

    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  };
  return (
    <div className="text-white">
      <div>
        <TypewriterEffect words={words} className={"mt-10"} />
      </div>

      <div
        className=" mt-14 lg:mt-10 lg:mx-[35%] md:mx-[31%] 
      mx-[20%] md:text-xl "
      >
        <form ref={form} action="" className="flex flex-col gap-2">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-3 p-2 rounded-lg md:text-lg bg-[#492121] "
            ref={name}
            name="from_name"
          />
          <label htmlFor="Email"> Email</label>

          <input
            type="Email"
            placeholder="E-mail"
            className="mt-3 p-2 rounded-lg md:text-lg bg-[#492121] "
            ref={email}
            name="from_email"
          />

          <label htmlFor="Email">Message</label>
          <textarea
            type="text"
            placeholder="Message"
            className="mt-3 p-2 rounded-lg md:text-lg bg-[#492121] "
            rows={6}
            ref={message}
            name="message"
          />
        </form>
        <div className="flex justify-end mt-2">
          <button
            className="bg-[#f237f6] text-sm p-2 rounded-lg hover:bg-white  hover:text-black duration-300"
            onClick={hanldleSubmit}
          >
            Submit
          </button>
        </div>

        <div className="flex justify-center">
          <footer className="mt-20 md:mt-14  text-sm text-gray-400">
            {" "}
            &#169; Sandesh Adhikari 2024{" "}
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Contact;
