import React from "react";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-gray-300 py-6 mt-16">
      <motion.div
        className="container mx-auto flex flex-col items-center justify-center space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Name or Logo */}
        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          © {new Date().getFullYear()} Azeez Abdul-Mujeeb
        </h3>

        {/* Social Icons */}
        <div className="flex gap-5 mt-2">
          <a
            href="https://github.com/MJ1305"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 transition"
          >
            <Github size={20} />
          </a>          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Small Note */}
        <p className="text-sm mt-3 text-gray-500 dark:text-gray-400">
          Built with ❤️ using React + TailwindCSS
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
