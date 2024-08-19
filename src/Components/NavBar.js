import React, { useEffect, useState } from "react";
import Hambureger from "./Hambureger";

function NavBar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        console.log("Scroll Position:", window.pageYOffset); // Debugging scroll position
        console.log("Section:", section.id, "Top Offset:", sectionTop); // Debugging section offsets

        if (window.pageYOffset >= sectionTop - -780) {
          currentSection = section.getAttribute("id");
        }
      });

      // If the page is at the top, set the current section to 'home'
      if (window.pageYOffset < sections[0].offsetTop - -780) {
        currentSection = "home";
      }

      console.log("Current Section:", currentSection); // Debugging current section
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#1A0B2E] w-full flex py-8 fixed z-40">
      <div className="flex items-center w-full justify-between wrap">
        <a
          href="#"
          className="font-preahvihear text-5xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)] hover:text-white"
        >
          JC Dev.
        </a>
        <div className="nav-menu">
          <ul className="flex justify-end capitalize gap-8 text-xl font-semibold">
            <li
              className={
                activeSection === "home" ? "active text-[#763CAC]" : ""
              }
            >
              <a href="#home">home</a>
            </li>
            <li
              className={
                activeSection === "about" ? "active text-[#763CAC]" : ""
              }
            >
              <a href="#about">about</a>
            </li>
            <li
              className={
                activeSection === "skills" ? "active text-[#763CAC]" : ""
              }
            >
              <a href="#skills">skills</a>
            </li>
            <li
              className={
                activeSection === "projects" ? "active text-[#763CAC]" : ""
              }
            >
              <a href="#projects">projects</a>
            </li>
            <li
              className={
                activeSection === "contact" ? "active text-[#763CAC]" : ""
              }
            >
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
