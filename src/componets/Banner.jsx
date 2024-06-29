import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";

function Banner() {
  return (
    <section id="home" className="h-screen w-full ">
      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center md:py-16 py-2 md:mt-15 lg:mt-20">
          <div className="flex flex-col lg:flex-row items-center justify-center px-4">
            <div className="text-center p-6 ">
              <h3 className="text-xl md:text-3xl px-2">Hey..! I'm</h3>
              <h1 className="text-3xl md:text-6xl py-6 px-2 font-serif font-semibold ">
                Chakradhar Shanigarapu
              </h1>
              <h5 className="text-2xl px-2 italic font-mono">
                - Frontend Developer
              </h5>
              <div className="flex items-center gap-6 justify-center p-8">
                <a
                  href="https://www.linkedin.com/in/chakradhar-shanigarapu-107428197/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/chakradhar05"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub size={30} />
                </a>
                <a
                  href="https://leetcode.com/u/chakri_05/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbBrandLeetcode size={30} />
                </a>
                <a
                  href="https://www.instagram.com/chakri_05/?next=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                className="h-40 w-40 md:h-60 md:w-60 rounded-full mx-20"
                src="https://img.freepik.com/free-photo/fun-3d-illustration-cartoon-kid-with-vr-helmet_183364-81191.jpg?w=740"
                alt="Profile"
              />
            </div>
          </div>

          <div className="absolute bottom-4 flex justify-center  animate-bounce mt-12 md:mt-24">
            <FaArrowDown size={40} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
