import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Image from "./images/BackgroundImg.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  search: {
    background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)) ,url(${Image}) no-repeat center center / cover`,
    height: "70vh",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
  },
  searchbar: {
    display: "grid",
    placeItems: "center",
  },
  "@keyframes searchHead": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "1",
    },
  },
  searchResultHeadLight: {
    animation: "$searchHead 1s ease-in-out",
    background: "#f9f9f9",
    transition: "all 0.3s",
    height: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchResultHeadDark: {
    animation: "$searchHead 1s ease-in-out",
    background: "#121212",
    transition: "all 0.3s",
    height: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  quote: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    color: "#f7f7fa",
    textAlign: "center",
  },
  quoteIcon: {
    transform: "translate(-360px)",
  },
});
const LayoutSearch = ({ children, value, mode }) => {
  const classes = useStyles();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className={classes.search}
      >
        <Typography variant="h6" className={classes.quote}>
          <FormatQuoteIcon
            className={classes.quoteIcon}
            style={{ fontSize: "50px", marginBottom: "20px" }}
          />
          Books let you fight dragons, meet the love of your life, travel to far
          away lands and laugh alongside friends, all within their pages.
          They're an escape that brings you home.
          <span
            style={{
              marginTop: "20px",
              color: "rgb(240 195 141)",
              fontWeight: "bold",
            }}
          >
            @betterbybooks
          </span>
        </Typography>
        <div style={{ display: "grid", placeItems: "center" }}> {children}</div>
      </motion.div>
      {value ? (
        <Typography
          style={
            mode
              ? { color: "#f7f7fa", transition: "all 0.3s" }
              : { color: "black", transition: "all 0.3s" }
          }
          className={
            mode ? classes.searchResultHeadDark : classes.searchResultHeadLight
          }
          variant="h3"
        >
          {value ? "Search Results" : ""}
        </Typography>
      ) : (
        <div
          className={
            mode ? classes.searchResultHeadDark : classes.searchResultHeadLight
          }
        ></div>
      )}
    </>
  );
};

export default LayoutSearch;
