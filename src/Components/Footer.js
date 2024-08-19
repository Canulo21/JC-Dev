import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function Footer() {
  return (
    <>
      <div className="bg-[#1A0B2E] py-5 px-5 text-center">
        <span className="font-preahvihear drop-shadow-[0_0_10px_rgba(255,255,255,1)]">
          By JC Dev. - 2024
        </span>
      </div>
      <div className="back-top fixed right-10 bottom-16 z-20">
        <a href="#">
          <ArrowCircleUpIcon sx={{ fontSize: 50 }} />
        </a>
      </div>
    </>
  );
}

export default Footer;
