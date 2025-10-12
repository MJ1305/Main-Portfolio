import React, { useState, useEffect } from "react";
import Navbar from "./Components/navbar";
import Hero from "./Components/hero";
import About from "./Components/about";
import Projects from "./Components/projects";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import ScrollToTop from "./Components/scrolltoTop";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
