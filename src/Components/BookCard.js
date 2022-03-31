import React from "react";
import { useState } from "react";
import {
  CardMedia,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";
// import "./App.css";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Rating } from "@mui/material";

import { CardActionArea } from "@mui/material";

const LanCodes = {
  Amharic: "am",
  Arabic: "ar",
  Basque: "eu",
  Bengali: "bn",
  "English (UK)": "en-GB",
  "Portuguese (Brazil)": "pt-BR",
  Bulgarian: "bg",
  Catalan: "ca",
  Cherokee: "chr",
  Croatian: "hr",
  Czech: "cs",
  Danish: "da",
  Dutch: "nl",
  "English (US)": "en",
  Estonian: "et",
  Filipino: "fil",
  Finnish: "fi",
  French: "fr",
  German: "de",
  Greek: "el",
  Gujarati: "gu",
  Hebrew: "iw",
  Hindi: "hi",
  Hungarian: "hu",
  Icelandic: "is",
  Indonesian: "id",
  Italian: "it",
  Japanese: "ja",
  Kannada: "kn",
  Korean: "ko",
  Latvian: "lv",
  Lithuanian: "lt",
  Malay: "ms",
  Malayalam: "ml",
  Marathi: "mr",
  Norwegian: "no",
  Polish: "pl",
  "Portuguese (Portugal)": "pt-PT",
  Romanian: "ro",
  Russian: "ru",
  Serbian: "sr",
  "Chinese (PRC)": "zh-CN",
  Slovak: "sk",
  Slovenian: "sl",
  Spanish: "es",
  Swahili: "sw",
  Swedish: "sv",
  Tamil: "ta",
  Telugu: "te",
  Thai: "th",
  "Chinese (Taiwan)": "zh-TW",
  Turkish: "tr",
  Urdu: "ur",
  Ukrainian: "uk",
  Vietnamese: "vi",
  Welsh: "cy",
};

const useStyles = makeStyles({
  img: {
    width: "40%!important",
    margin: "auto",
    display: "inline",
    "&:hover": {
      transform: "rotate(3deg) scale(1.08)",
      transition: "all 300ms",
      opacity: "0.7",
    },
  },

  noImg: {
    width: "40%",
    height: "225px",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },

  cardDark: {
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
    },
  },
  cardLight: {
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0px 0px 8px rgb(0,0,0)",
    },
  },
  cardTitle: {
    textAlign: "center",
  },
  btnRead: {
    marginRight: "20px",
    marginTop: "5rem",
  },
  btnDelete: {
    marginTop: "50px",
    marginLeft: "20px",
  },
  rotate: {
    transform: "Rotate(180deg)",
    transition: "all 350ms",
  },
  hide: {
    display: "none",
  },
});

const BookCard = ({
  title,
  author,
  description,
  publisher,
  img,
  link,
  id,
  deleteCard,
  pageCount,
  averageRating,
  mode,
  language,
}) => {
  const [readMore, setReadMore] = useState(false);

  const classes = useStyles();
  let Language = ``;
  const LanKeys = Object.keys(LanCodes);
  let i = 0;

  return (
    <>
      <Card
        className={mode ? classes.cardDark : classes.cardLight}
        style={
          mode
            ? {
                backgroundColor: "#404040",
                color: "#f7f7fa",
                transition: "all 0.3s",
              }
            : {
                backgroundColor: "#f7f7fa",
                color: "black",
                transition: "all 0.3s",
              }
        }
      >
        <CardHeader className={classes.cardTitle} title={title} />
        {img ? (
          <>
            <CardActionArea
              style={{ display: "inline" }}
              href={link}
              target="_blank"
            >
              <CardMedia
                component="img"
                className={classes.img}
                image={img}
              ></CardMedia>
            </CardActionArea>
          </>
        ) : (
          <div className={classes.noImg}>
            <Typography variant="subtitle1">No Image Found</Typography>
          </div>
        )}

        <CardContent>
          <Typography style={{ marginTop: "20px" }} variant="h6">
            {author ? `Author : ${author}` : `Author : Unknown`}
          </Typography>
          <Typography style={{ marginTop: "20px" }} variant="h6">
            {Object.values(LanCodes).forEach((lan) => {
              if (lan === language) {
                Language = LanKeys[i];
              } else {
                i++;
              }
            })}
            Language: {Language}
          </Typography>

          <Typography style={{ marginTop: "20px" }} variant="subtitle1">
            {description
              ? readMore
                ? description
                : `${description.substring(0, 200)}...`
              : ""}
          </Typography>
          <Typography style={{ marginTop: "20px" }} variant="h6">
            {readMore
              ? publisher !== undefined
                ? `Publisher: ${publisher}`
                : `Publisher: Unknown`
              : " "}
          </Typography>
          <Typography style={{ marginTop: "20px" }} variant="h6">
            {readMore
              ? pageCount !== undefined
                ? `Page Count: ${pageCount}`
                : `Page Count: Unknown`
              : " "}
          </Typography>
          <Typography style={{ marginTop: "20px" }} variant="h6">
            {readMore ? (
              averageRating ? (
                <Rating
                  name="read-only"
                  value={averageRating}
                  precision={0.5}
                />
              ) : (
                "Rating Not Found"
              )
            ) : (
              ""
            )}
          </Typography>
          <Button
            variant="contained"
            style={{ marginRight: "20px", marginTop: "10px" }}
            onClick={() => setReadMore(!readMore)}
            endIcon={
              !readMore ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowDownIcon className={classes.rotate} />
              )
            }
          >
            {readMore ? "Show Less" : "Read More"}
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: "20px", marginTop: "10px" }}
            className={classes.btnDelete}
            color="secondary"
            onClick={() => {
              deleteCard(id);
            }}
          >
            Delete Card
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default BookCard;
