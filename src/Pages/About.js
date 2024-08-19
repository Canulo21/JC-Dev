import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import devImg from "../Assets/images/dev-1.png";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineItemClasses,
} from "@mui/lab";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";

function About() {
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
            {"< About Me"}{" "}
            <span className="text-[#7127BA] filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              /
            </span>
            {" >"}
          </h1>
        </motion.div>
        <div className="about-holder flex gap-20">
          <div className="img-holder">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            >
              <em className="font-preahvihear text-lg tracking-widest leading-relaxed">
                "I am currently a WordPress web developer with experience since
                2021. My passion for web development drives me to continually
                enhance my skills, and I am now focused on becoming a frontend
                developer. I enjoy creating visually appealing and user-friendly
                websites. My goal is to combine my WordPress expertise with
                advanced frontend technologies to deliver dynamic and responsive
                web experiences."
              </em>
            </motion.div>
            <motion.div
              className="img-dev flex justify-center"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={devImg}
                width="600px"
                height="full"
                alt="Jhon Carlo"
                className="relative z-10"
              />
            </motion.div>
          </div>
          <motion.div
            className="accordion-holder  bg-[#1A0B2E] py-5 px-10"
            style={{
              boxShadow: "rgb(50 26 81) 0px 0px 74px 10px",
            }}
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="education-holder ">
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="success">
                      <SchoolIcon sx={{ fontSize: 30 }} />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent className="flex items-center">
                    <h3 className="text-2xl">Education</h3>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="timeline-content">
                      <div>Governor Alfonso D. Tan College</div>
                      <div className="timeline-date text-sm text-gray-400 mt-1">
                        2021 - 2022
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="timeline-content">
                      <div>Ozamis City School of Arts and Trades</div>
                      <div className="timeline-date text-sm text-gray-400 mt-1">
                        2019 - 2021
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="success" />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="timeline-content">
                      <div>Tudela Central School</div>
                      <div className="timeline-date text-sm text-gray-400 mt-1">
                        2017 - 2019
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
            <div className="experience-holder">
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <LaptopMacIcon sx={{ fontSize: 30 }} />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent className="items-center flex">
                    <h3 className="text-2xl">Experience</h3>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="timeline-content">
                      <div>24 Creative Media Solutions Inc.</div>
                      <div className="timeline-date text-sm text-gray-400 mt-1">
                        2021 - Present
                      </div>
                      <div className="timeline-date text-sm text-white-400 mt-1">
                        Junior Web Developer
                      </div>
                      <div className="timeline-date text-sm text-gray-400 mt-1">
                        Turns Design to a functional WordPress Website
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="timeline-content">
                      <div>Benpos System</div>
                      <div className="timeline-date text-sm text-gray-400 mt-1">
                        1 month
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
