import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import cert1 from "../Assets/images/cert-1.png";

function Certificates() {
  const [getCertifates, setGetCertificates] = useState([]);

  useEffect(() => {
    setGetCertificates([
      {
        img: cert1,
        alt: "Responsive Web Design",
      },
    ]);
  }, []);

  return (
    <>
      <div className="pt-20 text-center">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Certificates</h2>
          <WorkspacePremiumIcon fontSize="large" />
        </motion.div>

        <div className="certs pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {getCertifates.map((cert, i) => (
              <motion.div
                key={i}
                className="cert-img"
                variants={fadeIn("up", 0.2 * (i + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <img src={cert.img} alt={cert.alt} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificates;
