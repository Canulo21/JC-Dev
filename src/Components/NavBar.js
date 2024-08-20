import React, { useEffect, useState, useRef } from "react";

function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const sideBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (window.pageYOffset >= sectionTop - 780) {
          currentSection = section.getAttribute("id");
        }
      });

      if (window.pageYOffset < sections[0].offsetTop - 780) {
        currentSection = "home";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleHamburger = () => {
    const newHamburgerOpenState = !isHamburgerOpen;
    setHamburgerOpen(newHamburgerOpenState);

    // Apply or remove the "active" class based on the new state
    const sbSiteElements = document.getElementsByClassName("sb-site");
    Array.from(sbSiteElements).forEach((element) => {
      if (newHamburgerOpenState) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target) &&
        isHamburgerOpen
      ) {
        setHamburgerOpen(false);
        const sbSiteElements = document.getElementsByClassName("sb-site");
        Array.from(sbSiteElements).forEach((element) => {
          element.classList.remove("active");
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHamburgerOpen]);

  return (
    <div className="bg-[#1A0B2E] w-full flex py-8 fixed z-40 nav-container">
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
        <div className="hamburger-left" ref={sideBarRef}>
          <div
            id="hamburger"
            className={`hamburglar ${
              isHamburgerOpen ? "is-open" : "is-closed"
            }`}
            onClick={toggleHamburger}
          >
            <div className="burger-icon">
              <div className="burger-container">
                <span className="burger-bun-top"></span>
                <span className="burger-filling"></span>
                <span className="burger-bun-bot"></span>
              </div>
            </div>

            <div className="burger-ring">
              <svg className="svg-ring">
                <path
                  className="path"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="4"
                  d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
                />
              </svg>
            </div>

            <svg width="0" height="0">
              <mask id="mask">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#ff0000"
                  strokeMiterlimit="10"
                  strokeWidth="4"
                  d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
                />
              </mask>
            </svg>
            <div className="path-burger">
              <div className="animate-path">
                <div className="path-rotation"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
