import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Jodi Enterprise",
    desc: "A conceptual e-commerce prototype focused on responsiveness and smooth UX.",
    tech: "React · Tailwind · JS",
    link: "https://jodiweb.netlify.app/",
  },
  {
    title: "Zulfah Web",
    desc: "A clone site built to master layout design and component structuring.",
    tech: "React · Tailwind · JS",
    link: "https://zulfahwebclone.vercel.app/",
  },
  {
    title: "Calender & Calculator",
    desc: "A project in which i was able to integrate AI alongside critical thinking to achieve the projected outcome and refine my skills.",
    tech: "React · Tailwind · JS · framer-motion · Screen-Responsiveness",
    link: "https://calender-calculator.vercel.app/",
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gradient-to-b from-gray-200 via-white to-gray-200 dark:from-slate-950 dark:to-slate-950"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition"
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
    </section>
  );
}

export default Projects;
