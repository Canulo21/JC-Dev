import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Box, Tabs, Tab } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import vikarsj from "../Assets/proj-images/vikarsj.png";
import nonbo from "../Assets/proj-images/nonbo.png";
import total from "../Assets/proj-images/total.png";
import sym from "../Assets/proj-images/sym.png";
import selmer from "../Assets/proj-images/selmer.png";
import haveservice from "../Assets/proj-images/haveservice.png";
import belloubyg from "../Assets/proj-images/belloubyg.png";
import naest from "../Assets/proj-images/naest.png";
import dinskrotpris from "../Assets/proj-images/dinskrotpris.png";
import praksish from "../Assets/proj-images/praksish.png";
import regler from "../Assets/proj-images/regler.png";
import vognmand from "../Assets/proj-images/vognmand.png";
import obauer4 from "../Assets/proj-images/obauer4.png";
import btldanmark from "../Assets/proj-images/btldanmark.png";
import pokemonImg from "../Assets/proj-images/pokemon.png";
import portfolioImg from "../Assets/proj-images/portfolio.png";
import tacImg from "../Assets/proj-images/tac.png";
import posImg from "../Assets/proj-images/pos.png";

function Projects() {
  const [wordPressProjects, setWordPressProjects] = useState([]);
  const [reactProjects, setReactProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [value, setValue] = useState("one");

  useEffect(() => {
    // Setting up WordPress projects
    setWordPressProjects([
      {
        img: haveservice,
        link: "https://haveservice.dk",
        title: "Haveservice",
      },
      {
        img: belloubyg,
        link: "https://belloubyg.dk",
        title: "Belloubyg",
      },
      {
        img: naest,
        link: "https://naestvedautomobilmuseum.dk",
        title: "Naestvedautomobilmuseum",
      },
      {
        img: dinskrotpris,
        link: "https://dinskrotpris.dk",
        title: "Dinskrotpris",
      },
      {
        img: praksish,
        link: "https://praksish.dk",
        title: "Praksish",
      },
      {
        img: regler,
        link: "https://reglerforudlandsdanskere.dk",
        title: "Reglerforudlandsdanskere",
      },
      {
        img: vognmand,
        link: "https://vognmand-zimling.dk",
        title: "Vognmand-zimling",
      },
      {
        img: obauer4,
        link: "https://obauer4.dk",
        title: "Obauer4",
      },
      {
        img: btldanmark,
        link: "https://btldanmark.dk",
        title: "Btldanmark",
      },
      {
        img: vikarsj,
        link: "https://vikarsj.dk",
        title: "Vikarsj",
      },
      {
        img: nonbo,
        link: "https://nonbo-biler.dk",
        title: "Nonbo-biler",
      },
      {
        img: total,
        link: "https://total-trykluft.dk",
        title: "Total-trykluft",
      },
      {
        img: sym,
        link: "https://symfoniorkester.dk",
        title: "Symfoniorkester",
      },
      {
        img: selmer,
        link: "https://selmertransport.dk",
        title: "Selmertransport",
      },
    ]);

    // Setting up ReactJS projects
    setReactProjects([
      {
        img: tacImg,
        link: "#",
        githubLink: "https://github.com/Canulo21/TAC-system",
        title: "TAC System",
        description:
          "A system made for our church to manage finances, expenses and records of members",
      },
      {
        img: pokemonImg,
        link: "https://jc-pokedex.vercel.app/",
        githubLink: "https://github.com/Canulo21/pokeDexJC",
        title: "JC PokeDex",
        description: "Playground for me to learn API",
      },
      {
        img: posImg,
        link: "#",
        githubLink: "https://github.com/Canulo21/pos",
        title: "POS",
        description:
          "A system made for POS this is also my playing ground to do backend and frontend",
      },
      {
        img: portfolioImg,
        link: "https://my-portfolio-jc.vercel.app/",
        githubLink: "https://github.com/Canulo21/my-portfolio-jc",
        title: "Portfolio",
        description: "This is my First Portfolio",
      },
    ]);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1); // Reset to the first page when tab is changed
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    value === "one"
      ? wordPressProjects.slice(indexOfFirstItem, indexOfLastItem)
      : reactProjects.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages =
    value === "one"
      ? Math.ceil(wordPressProjects.length / itemsPerPage)
      : Math.ceil(reactProjects.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="wrap pt-10">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1>
          {"< My Projects"}{" "}
          <span className="text-[#7127BA] filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            /
          </span>
          {" >"}
        </h1>
      </motion.div>
      <div className="holder">
        <Box sx={{ width: "100%" }}>
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              aria-label="project tabs"
              className="mb-7"
              centered
              sx={{
                "& .MuiTab-root": { color: "#7127ba" },
                "& .Mui-selected": {
                  color: "#fff !important",
                  fontSize: "18px",
                },
              }}
            >
              <Tab value="one" className="text-xl" label="WordPress" />
              <Tab value="two" label="ReactJs" />
            </Tabs>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lists-proj"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            {currentItems.map((project, i) => (
              <div
                key={i}
                className="card pt-3 pb-2 px-3 rounded-lg shadow-md text-center flex flex-col"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="rounded-lg mb-3"
                  />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-preahvihear tracking-wide mt-3 text-white hover:text-[#7127ba]"
                >
                  {project.title}
                </a>
                {project.description && (
                  <p className="text-center text-sm text-gray-400 my-3">
                    {project.description}
                  </p>
                )}
                {project.githubLink && (
                  <div className="text-center mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="devicon-github-original-wordmark text-3xl"></i>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Stack spacing={2} sx={{ marginTop: "20px" }}>
              <Pagination
                className="flex justify-center"
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                    sx={{
                      backgroundColor: "#7127BA",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#5b1c91" },
                      "&.Mui-selected": {
                        backgroundColor: "#5b1c91",
                        color: "#fff",
                      },
                    }}
                  />
                )}
                sx={{
                  "& .MuiPaginationItem-root": {
                    backgroundColor: "#7127BA",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#5b1c91" },
                    "&.Mui-selected": {
                      backgroundColor: "#5b1c91",
                      color: "#fff",
                    },
                  },
                }}
              />
            </Stack>
          </motion.div>
        </Box>
      </div>
    </div>
  );
}

export default Projects;
