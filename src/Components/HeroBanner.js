import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import heroImage from "../Assets/images/hero.png";
import bannerArrow from "../Assets/images/banner-slider-arrow.png";
import fbImg from "../Assets/images/facebook.png";
import linkedImg from "../Assets/images/linkedin.png";
import gitHubImg from "../Assets/images/github.png";

function HeroBanner() {
  return (
    <>
      <div className="holder flex wrap items-center justify-between pt-[200px]">
        <div className="middle-text">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="font-preahvihear text-[48px]">
              I'm a Front-end Developer.{"< "}
              <span className="text-[#7127BA] filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                /
              </span>
              {" >"}
            </span>
          </motion.div>
          <br></br>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="font-plus_jakarta text-[19px]">
              Currently, I'm a WordPress Web Developer at{" "}
              <a
                href="https://www.eteam.dk/"
                target="blank_"
                className="text-2xl"
              >
                <span className="font-preahvihear font-bold text-[#7127BA] text-3xl">
                  E
                </span>
                team.dk
              </a>
            </span>
          </motion.div>
          <div className="bottom-text mt-10">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="font-preahvihear">
                As a passionate self-taught front-end developer, <br></br>I'm
                driven by curiosity and a love for crafting intuitive,
                responsive web experiences. <br></br> My journey is fueled by
                continuous learning and a deep commitment to mastering the art
                of web design.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.55)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            >
              <a className="btn-1 mt-7" href="#">
                Download CV
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="social-links flex items-center gap-5 mt-16"
            >
              <a
                href="https://www.facebook.com/jhoncarlo.canulo"
                target="blanl_"
              >
                <img src={fbImg} width="50px" height="50px" alt="Fb" />
              </a>
              <a
                href="https://www.linkedin.com/in/jhon-carlo-canulo-116013227/"
                target="blank_"
              >
                <img
                  src={linkedImg}
                  width="50px"
                  height="50px"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://github.com/Canulo21" target="blank_">
                <img src={gitHubImg} width="50px" height="50px" alt="Github" />
              </a>
            </motion.div>
          </div>
        </div>

        <div className="hero relative">
          <motion.div
            className="hero-name relative right-[230px] inline-block"
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="font-preahvihear text-lg relative">
              Hello! I Am{" "}
              <label className="text-[#7127BA] underline underline-offset-8 hover:text-white">
                Jhon Carlo Canulo
              </label>
            </span>
            <img
              src={bannerArrow}
              alt="arrow"
              className="absolute inset-0 mx-auto mt-10 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] wiggle-animation"
            />
          </motion.div>
          <motion.div
            className="hero-image relative"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={heroImage}
              width="500px"
              height="full"
              alt="hero"
              className="relative z-10"
            />
            <div
              className="absolute inset-0 z-[-1]"
              style={{
                background:
                  "radial-gradient(circle, rgba(118, 60, 172, 1) 15%, rgba(255,255,255, .0) 60%)",
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
