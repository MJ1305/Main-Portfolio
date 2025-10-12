import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";


function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isOpen, setIsOpen] = useState(false);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="fixed w-full z-50 bg-white/80  dark:bg-slate-900/80 backdrop-blur border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        {/* <div>
          <img className="w-[11rem] h-[4rem] border" src={Logo} alt="" />
        </div>         */}
        <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
          Mvjib.dev
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth="easeInOutQuart"
              duration={800} // smoother scroll duration
              offset={-80} // adjusts for fixed navbar height
              spy={true}
              className="cursor-pointer text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              {item}
            </ScrollLink>
          ))}

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 px-6 py-4 space-y-4 transition-colors duration-300">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth="easeInOutQuart"
              duration={800}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block cursor-pointer text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {item}
            </ScrollLink>
          ))}

          {/* Theme toggle for mobile */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
          >
            {theme === "dark" ? (
              <>
                <Sun size={18} /> <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={18} /> <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
