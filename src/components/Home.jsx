import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped, Typed } from "react-typed";
import pic from "../../public/logo.png";
function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-x">welcome in my feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, i am a </h1>
              {/* <span className="text-red-700 font-bold"> Devloper</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Devloper", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              A motivated developer with a solid understanding of software
              development concepts and various programming languages. I have
              gained hands-on experience through projects and am eager to apply
              my skills in creating efficient and scalable applications. Looking
              for opportunities to learn, grow, and Contribute to impactful
              projects.
            </p>
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-x-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <IoLogoLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <FaYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.telegram.com/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb
                    className="text-xl md:text-3xl hover:-scale-y-110 duration-200 rounded-full border-[2px]"
                    size={24}
                  />
                  <SiExpress size={24} />
                  <FaReact size={24} />
                  <FaNodeJs size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 mt-8 order-1 ">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
