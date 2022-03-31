import { makeStyles } from "@mui/styles";
import React from "react";
import Image from "./images/Intro_cover.jpg";
import { motion } from "framer-motion";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  img: {
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) ,url(${Image}) no-repeat center center / cover`,
    height: "91.5vh",
  },
  quote: {
    textAlign: "center",
    marginTop: "100px",
  },
  input: {
    background: "#f7f7fa",
    width: "40vw",
    borderRadius: "4px",
    display: "block",
  },
  form: {
    marginLeft: "34%",
    height: "200px",
  },
  "@keyframes button": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.1)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },

  btn: {
    animation: "$button 2s 8.5s infinite",
    "&:hover": {
      textShadow: "0px 0px 8px rgb(255,255,255)",
    },
  },
});

const Intro = () => {
  const navigate = useNavigate();

  const classes = useStyles();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className={classes.img}
      >
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <Typography
            style={{
              transform: "translateY(250px)",
              color: "#f7f7fa",
            }}
            variant="h4"
            className={classes.quote}
          >
            One Place.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
        >
          <Typography
            style={{
              transform: "translateY(270px)",
              color: "#f7f7fa",
            }}
            variant="h4"
            className={classes.quote}
          >
            Search for Thousands of Books.
          </Typography>
        </motion.div>
        <motion.form
          initial={{ x: -300, y: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 7, duration: 1 }}
          className={classes.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <Button
            style={{
              marginTop: "20px",
              marginLeft: "124px",
              width: "230px",
              display: "block",
            }}
            className={classes.btn}
            variant="contained"
            onClick={() => navigate("/Search")}
          >
            Explore!
          </Button>
        </motion.form>
      </motion.div>
    </>
  );
};

export default Intro;
