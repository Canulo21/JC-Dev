import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Skills() {
  const skillSet = [
    {
      title: "Wordpress",
      icon: <i class="devicon-wordpress-plain"></i>,
    },
    {
      title: "ReactJS",
      icon: <i class="devicon-react-original"></i>,
    },
    {
      title: "Framer Motion",
      icon: <i class="devicon-framermotion-original"></i>,
    },
    {
      title: "GitHub",
      icon: <i class="devicon-github-original"></i>,
    },
    {
      title: "HTML",
      icon: <i class="devicon-html5-plain"></i>,
    },
    {
      title: "TailwindCSS",
      icon: <i class="devicon-tailwindcss-original"></i>,
    },
    {
      title: "Jquery",
      icon: <i class="devicon-jquery-plain"></i>,
    },
    {
      title: "Javscript",
      icon: <i class="devicon-javascript-plain"></i>,
    },
    {
      title: "PHP",
      icon: <i class="devicon-php-plain"></i>,
    },
    {
      title: "Adobe XD",
      icon: <i class="devicon-xd-plain"></i>,
    },
    {
      title: "Adobe Photoshop",
      icon: <i class="devicon-photoshop-plain"></i>,
    },
  ];

  return (
    <>
      <div className="wrap pt-10">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1>
            {"< My Skills"}{" "}
            <span className="text-[#7127BA] filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              /
            </span>
            {" >"}
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillSet.map((skill, i) => {
            return (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.2 * (i + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="card pt-4 pb-3 px-5 border rounded-lg shadow-md text-center">
                  <p className="text-5xl mb-3 icon-img">{skill.icon}</p>
                  <p className="text-sm font-preahvihear tracking-wide">
                    {skill.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
