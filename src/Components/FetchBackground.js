import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { HashLoader, BeatLoader } from "react-spinners";

const useStyles = makeStyles({
  displayLight: {
    height: "91.5vh",
    backgroundColor: "#f9f9f9",
  },
  displayDark: {
    height: "91.5vh",
    backgroundColor: "#121212",
  },
  loader1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translateY(230px)",
  },
  loader2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translateY(250px)",
  },
});

const FetchBackground = ({ mode }) => {
  const classes = useStyles();
  return (
    <div className={mode ? classes.displayDark : classes.displayLight}>
      <div className={classes.loader1}>
        <Typography variant="h2" color={mode ? "#f9f9f9" : "#121212"}>
          Kindly Wait <BeatLoader color={mode ? "#f9f9f9" : "#121212"} />
        </Typography>
      </div>
      <div className={classes.loader2}>
        <HashLoader size="100" color={mode ? "#f9f9f9" : "#121212"} loading />
      </div>
    </div>
  );
};

export default FetchBackground;
