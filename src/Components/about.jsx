import React from "react";
import { motion } from "framer-motion";
import Imgs from "../image/Img01.jpg";

const skills = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "React",
  "Node.js",
  "Vite",
  "Bootstrap",
];

//  {
//     title: "Currency Converter — Real-time FX Converter",
//     desc: "Currency converter with live exchange rates, supports currency swap, amount formatting, and caches rates for better performance.",
//     tech: "React, JavaScript (ES6+), Tailwind CSS, Vite, exchangerate.host API",
//     link: "https://calender-calculator.vercel.app/",
//   }

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center bg-white/70 dark:bg-slate-950 backdrop-blur-md p-8 rounded-2xl shadow-lg">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-xl">
            I’m a Front-End Developer with a great aspiration for building and collaboration. I
            started my journey at{" "}
            <a
              className="underline text-blue-600 dark:text-blue-400"
              href="https://zulfahgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zulfah Group
            </a>{" "}
            where I learned the fundamentals of HTML, CSS and JavaScript. I
            enjoy building clean, accessible, and responsive interfaces using
            React and Tailwind CSS. I’m driven by usability and performance —
            and I’m always learning new tools and patterns.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
            <a
              href="/Azeez_AbdulMujeeb_FrontEnd_CV_Final_Blue.pdf"
              className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition text-sm"
            >
              View my CV
            </a>
          </div>

          {/* Small Stats */}
          <div className="flex items-center gap-6 mt-3">
            <div className="text-sm">
              <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                3+
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Projects
              </div>
            </div>
            <div className="text-sm">
              <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                1
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Internship
              </div>
            </div>
            <div className="text-sm">
              <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                1 yr
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Traineeship
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image + Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="flex flex-col items-center md:items-start gap-6"
        >
          {/* Image */}
          <div className="w-44 h-44 rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/5 flex items-center justify-center shadow-md">
            <img
              src={Imgs}
              alt="Azeez Abdul-Mujeeb"
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Skills Grid */}
          <div className="w-full">
            <h3 className="text-s font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Skills
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-2 bg-gray-50 border shadow-md dark:bg-white/5 rounded-lg text-center text-gray-700 dark:text-gray-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="w-full">
            <p className="text-s text-gray-500 dark:text-gray-400">
              Always open to collaboration and freelance/frontend roles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
