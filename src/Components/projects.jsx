import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Zulfah Web (Cloned Website Practice)",
    desc: "A clone site built to master layout design and component structuring.First ever example project worked on",
    tech: "React · Tailwind · JS",
    link: "https://zulfahwebclone.vercel.app/",
  },
  {
    title: "Blaze Horizon Realty Limited",
    desc: "currency converter with live exchange rates, supports currency swap, amount formatting, and caches rates for better performance.",
    tech: "React, JavaScript (ES6+), Tailwind CSS, Vite, exchangerate.host API",
    link: "https://the-blaze-horizon-realty-limited-pr.vercel.app/",
  },
  {
    title: "Calender & Calculator",
    desc: "A project in which i was able to integrate AI alongside critical thinking to achieve the projected outcome and refine my skills.",
    tech: "React · Tailwind · JS · framer-motion · Screen-Responsiveness",
    link: "https://calender-calculator.vercel.app/",
  },
  {
    title: "Currency Converter — Real-time FX Converter",
    desc: "currency converter with live exchange rates, supports currency swap, amount formatting, and caches rates for better performance.",
    tech: "React, JavaScript (ES6+), Tailwind CSS, Vite, exchangerate.host API",
    link: "https://currency-converter-dusky-iota.vercel.app",
  }
];

function Projects() {
  // Split projects into chunks of 3 (one row per chunk)
  const chunkProjects = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const projectRows = chunkProjects(projects, 3);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gradient-to-b from-gray-200 via-white to-gray-200 dark:from-slate-950 dark:to-slate-950"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
        Featured Projects
      </h2>

      {/* Scrollable container showing one row per “page” */}
      <div
        className="max-w-6xl mx-auto overflow-y-auto pr-4 scroll-smooth"
        style={{ maxHeight: "220px", scrollSnapType: "y mandatory" }}
      >
        {projectRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 scroll-snap-align-start"
          >
            {row.map((proj, index) => (
              <motion.div
                key={index}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {proj.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">{proj.desc}</p>

                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                  {proj.tech}
                </p>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-300 text-md mt-4 inline-block hover:underline"
                >
                  Visit Project →
                </a>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
