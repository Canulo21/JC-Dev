import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import emailjs from "emailjs-com";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#fff",
          },
          "& .MuiInputLabel-root": {
            color: "#fff",
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "transparent",
            border: "1px solid #fff",
            "& fieldset": {
              borderColor: "#fff",
              color: "#fff",
            },
            "&:hover fieldset": {
              borderColor: "#fff",
              color: "#fff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#763CAC",
              color: "#fff",
            },
          },
        },
      },
    },
  },
});

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_us3543d", // Replace with your Email.js service ID
        "template_eimpl0m", // Replace with your Email.js template ID
        form.current,
        "hFFW04KwUuiD_LcGc" // Replace with your Email.js user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="wrap pt-10">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1>
            {"< Contact Me"}{" "}
            <span className="text-[#7127BA] filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              /
            </span>
            {" >"}
          </h1>
        </motion.div>
        <div className="contact-wrapper">
          <motion.div
            className="contact-container"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <Box
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: "100%",
                    display: "flex",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-name"
                    label="Name"
                    name="user_name"
                    placeholder="Jhon"
                    variant="outlined"
                    required
                  />
                  <TextField
                    id="outlined-email"
                    label="E-mail"
                    name="user_email"
                    placeholder="example@gmail.com"
                    variant="outlined"
                    required
                  />
                  <TextField
                    id="outlined-message"
                    label="Message"
                    name="message"
                    multiline
                    rows={10}
                    variant="outlined"
                    required
                  />
                </div>
              </Box>

              <button
                type="submit"
                value="Send"
                className="mt-4 ml-2 px-4 py-2 bg-[#763CAC] text-white font-semibold rounded flex items-center gap-3 uppercase hover:bg-[#1a0b2e]"
              >
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Contact;
