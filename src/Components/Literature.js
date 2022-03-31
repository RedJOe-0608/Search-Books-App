import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CardMedia, Card } from "@mui/material";
import "../App.css";
import FetchBackground from "./FetchBackground";
import { motion } from "framer-motion";
import { CardActionArea } from "@mui/material";

const useStyles = makeStyles({
  gridWidth: {
    minWidth: 185,
    display: "flex",
    flexDirection: "row",
  },

  btn: {
    display: "block",
  },
  img: {
    width: "50px",
    height: "50px",
    margin: "auto",
    "&:hover": {
      transform: "rotate(3deg) scale(1.08)",
      transition: "all 300ms",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
    },
  },

  noImg: {
    width: "40%",
    margin: "auto",
    border: "2px solid red",
    textAlign: "center",
  },
  card: {
    display: "inline",
    margin: "10px",
  },
  noCard: {
    display: "inline",
  },
});

const Literature = ({ mode }) => {
  let link = "";
  let bookLink = "";
  const classes = useStyles();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  let img = "";
  let id = " ";
  const renderDetails1 = async () => {
    const response = await fetch(
      `http://openlibrary.org/subjects/literature.json?limit=30`
    );
    const data = await response.json();
    // console.log(data);
    // console.log(data.works);
    setDetails(data.works);
    setLoading(false);
  };
  useEffect(() => {
    renderDetails1();
  }, []);

  if (loading) {
    return (
      <>
        <FetchBackground mode={mode} />
      </>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <Typography
        variant="h3"
        style={
          mode
            ? {
                color: "#f7f7fa",
                transition: "all 0.3s",
                marginTop: "20px",
                marginBottom: "20px",
                textAlign: "center",
              }
            : {
                color: "black",
                transition: "all 0.3s",
                marginTop: "20px",
                marginBottom: "20px",
                textAlign: "center",
              }
        }
      >
        Genre: Literature
      </Typography>
      {details
        ? details.map((detail) => {
            id = detail.cover_id;
            link = detail.key;
            bookLink = `https://openlibrary.org/${link}`;
            img = `https://covers.openlibrary.org/b/ID/${id}-M.jpg`;
            return (
              <div className={id ? classes.card : classes.noCard}>
                {id ? (
                  <Card className={classes.card}>
                    <CardActionArea
                      style={{ display: "inline" }}
                      href={bookLink}
                      target="_blank"
                    >
                      <CardMedia
                        component="img"
                        style={{
                          width: "17%",
                          height: "20%",
                          display: "inline",
                        }}
                        className={mode ? classes.imgDark : classes.imgLight}
                        image={img}
                      />
                    </CardActionArea>
                  </Card>
                ) : (
                  ""
                )}
              </div>
            );
          })
        : ""}
    </motion.div>
  );
};

export default Literature;
