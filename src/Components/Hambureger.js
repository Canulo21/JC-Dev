import { useState, useEffect } from "react";

function Hambureger() {
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
    <>
      <div className="side-bar-wrapper">
        <div className="side-bar-container">
          <div className="logo-side-bar text-center mb-12">
            <a
              href="#"
              className="font-preahvihear text-5xl  font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)] hover:text-white"
            >
              JC Dev.
            </a>
          </div>
          <div className="menu-side-bar">
            <ul className="">
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
    </>
  );
}

export default Hambureger;
