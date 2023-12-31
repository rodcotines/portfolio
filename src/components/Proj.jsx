import React, { useEffect } from "react";
import Rendered from "../assets/Room.png";
import { motion } from "framer-motion";

const Proj = () => {
  return (
    <div id="proj" className="w-full  bg-[#0B0C10] py-16  px-4">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="max-w-[1240px] mx-auto grid md:grid-cols-2"
      >
        <img
          className="w-[500px] mx-auto my-4 rounded-md"
          src={Rendered}
          alt="/"
        />

        <div className=" flex flex-col justify-center ">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
            className="text-[#00df9a] uppercase font-bold"
          >
            Blender Project
          </motion.p>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
            className=" text-white md:text-4xl mx:py-2 sm:text-3xl text-2xl font-bold py-2"
          >
            This is my First Blender Project
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.75 }}
            className="text-white"
          >
            This Isometric Gaming Room is my first blender project out of
            projects in schools. This is also inspired by my own set up and my
            own room.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Proj;
