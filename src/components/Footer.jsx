import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center  overflow-hidden py-[4rem] bg-[#0B0C10] ">
      <div className=" w-[1240px] h-full flex flex-col gap-y-[1rem] justify-center items-center px-[2rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem]  ">
        <div className="flex gap-x-[1.5rem] md:w-full">
          <h1 className="text-white text-5xl font-bold lg:4xl whitespace-nowrap ">
            Rod Cotines
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[4rem] gap-y-[3rem] h-full w-full place-items-center md:place-items-start ">
          <div className=" hidden md:flex flex-col ">
            <h1 className="text-secondary text-[0.9rem] lg:text-[1rem] text-justify w-auto text-[#00df9a] font-bold ">
              ──────────────
            </h1>
          </div>
          <div className="flex flex-col ">
            <div className=" flex items-center justify-center">
              <h1 className="text-[#00df9a] text-2xl font-bold md:w-full pb-4">
                Services
              </h1>
            </div>

            <ul>
              <li className="text-white"> • 3d Design | Blender</li>
              <li className="text-white">• UI/UX Design</li>
              <li className="text-white">• Website development</li>
              <li className="text-white">• Photo Editing </li>
              <li className="text-white">• Video Editing </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className=" flex ">
              <h1 className="text-[#00df9a] text-2xl font-bold pb-4">
                Contacts
              </h1>
            </div>
            <a className="pb-2" href="https://facebook.com/ayenzc">
              <svg
                className="fill-white hover:fill-[#00df9a]"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/yenzaaaa/">
              <svg
                className="fill-white hover:fill-[#00df9a]"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                <circle cx="16.806" cy="7.207" r="1.078" />
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
              </svg>
            </a>
            <a href="https://github.com/Ayenzcc">
              <svg
                className="fill-white hover:fill-[#00df9a]"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                />
              </svg>
            </a>
            <a href="mailto:rodcotines@gmail.com">
              <svg
                className="fill-white hover:fill-[#00df9a]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z" />
              </svg>
            </a>
          </div>
        </div>
        <hr className=" flex border-[#00df9a] border-[1px] w-[100%] lg:w-[100%]" />
        <div className=" flex  w-full text-white font-bold">
          <h1 className="w-[50%]">© 2023 Rod Cotines</h1>
          <div className="flex flex-row w-[50%] items-end justify-end">
            <a className="" href="#hero">
              BACK TO TOP
            </a>
            <motion.a
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="pl-2"
            >
              ↑
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
