import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 bg-gradient-to-b from-gray-200 via-white to-gray-300 dark:from-slate-900 dark:to-slate-950 transition-colors duration-500"
    >
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m{" "}
        <span className="text-blue-600 dark:text-blue-400">Azeez Abdul-Mujeeb</span>
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Front-End Developer",
          2000,
          "React Enthusiast",
          2000,
          "Creative Coder",
          2000,
        ]}
        wrapper="span"
        speed={50}
        className="text-lg md:text-2xl text-gray-600 dark:text-gray-300"
        repeat={Infinity}
      />

      <motion.p
        className="mt-6 max-w-xl text-gray-500 dark:text-gray-400 text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Passionate about crafting sleek, responsive, and user-friendly interfaces
        with React and modern web technologies.
      </motion.p>
    </section>
  );
}

export default Hero;
