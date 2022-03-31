import React from "react";

import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import "../App.css";

const useStyles = makeStyles({
  "@keyframes show": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes hide": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },

  dropDownMenu: {
    animation: "$show .2s ease-in-out",
    width: "158px",
    fontSize: "16px",
    height: "220px",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "8px",
      background: "#0d141f",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "0px 8px 8px 0px",
      background: "#525861",
    },
    position: "absolute",
    top: "50px",
    left: "6px",
  },
  Menulist: {
    listStyle: "none",
    padding: "5px",
    color: "orange",
    fontSize: "1.2rem",
  },
  listItems: {
    marginTop: "6px",
    backgroundColor: "blue",
  },
  notVisible: {
    animation: "$hide .2s ease-in-out",
    display: "none",
  },
  selectBox: {
    display: "flex",
    background: "#f7f7fa",
    transition: "all 400ms",
    borderRadius: "4px",
  },
  optionsContainer: {
    background: "#2f3640",
    color: "#f5f6fa",

    borderRadius: "4px",
  },
  option: {
    padding: "14px 20px",
    cursor: "pointer",

    "&:hover": {
      background: "#414b57",
      transition: "all 0.3s",
    },
  },
  label: {
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#f5f6fa",
  },
  radio: {
    display: "none",
  },
});

const Dropdown = ({ click }) => {
  const classes = useStyles();

  return (
    <>
      <div className={click ? classes.dropDownMenu : classes.notVisible}>
        <div className={classes.selectBox.good}>
          <div className={classes.optionsContainer}>
            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="architecture"
                name="bookGenre"
                value="Architecture"
              />
              <label className={classes.label} htmlFor="architecture">
                <Link className={classes.link} to="/Architecture">
                  Architecture
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="art_history"
                name="bookGenre"
                value="Art_history"
              />
              <label className={classes.label} htmlFor="art_history">
                <Link className={classes.link} to="/Art_History">
                  Art History
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="fashion"
                name="bookGenre"
                value="Fashion"
              />
              <label className={classes.label} htmlFor="fashion">
                <Link className={classes.link} to="/Fashion">
                  Fashion
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="cooking"
                name="bookGenre"
                value="Cooking"
              />
              <label className={classes.label} htmlFor="cooking">
                <Link className={classes.link} to="/Cooking">
                  Cooking
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="entrepreneurship"
                name="bookGenre"
                value="Entrepreneurship"
              />
              <label className={classes.label} htmlFor="entrepreneurship">
                <Link className={classes.link} to="/Entrepreneurship">
                  Entrepreneurship
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="fantasy"
                name="bookGenre"
                value="Fantasy"
              />

              <label className={classes.label} htmlFor="fantasy">
                <Link className={classes.link} to="/Fantasy">
                  Fantasy
                </Link>
              </label>
            </div>
            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="historical_fiction"
                name="bookGenre"
                value="Historical_Fiction"
              />
              <label className={classes.label} htmlFor="historical_fiction">
                <Link className={classes.link} to="/Historical_Fiction">
                  Historical Fiction
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="horror"
                name="bookGenre"
                value="Horror"
              />
              <label className={classes.label} htmlFor="Horror">
                <Link className={classes.link} to="/horror">
                  Horror
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="humour"
                name="bookGenre"
                value="Humour"
              />
              <label className={classes.label} htmlFor="humour">
                <Link className={classes.link} to="/Humour">
                  Humour
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="literature"
                name="bookGenre"
                value="Literature"
              />
              <label className={classes.label} htmlFor="literature">
                <Link className={classes.link} to="/Literature">
                  Literature
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="mental_health"
                name="bookGenre"
                value="Mental_health"
              />
              <label className={classes.label} htmlFor="mental_health">
                <Link className={classes.link} to="/Mental_health">
                  Mental Health
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="mystery"
                name="bookGenre"
                value="Mystery"
              />
              <label className={classes.label} htmlFor="body">
                <Link className={classes.link} to="/Mystery">
                  Mystery
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="poetry"
                name="bookGenre"
                value="Poetry"
              />
              <label className={classes.label} htmlFor=" poetry">
                <Link className={classes.link} to="/Poetry">
                  Poetry
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="religion"
                name="bookGenre"
                value="religion"
              />
              <label className={classes.label} htmlFor="religion">
                <Link className={classes.link} to="/Religion">
                  Religion
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="romance"
                name="bookGenre"
                value="romance"
              />
              <label className={classes.label} htmlFor="romance">
                <Link className={classes.link} to="/Romance">
                  Romance
                </Link>
              </label>
            </div>
            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="science_fiction"
                name="bookGenre"
                value="Science_fiction"
              />
              <label className={classes.label} htmlFor="science_fiction">
                <Link className={classes.link} to="/Science_fiction">
                  Science Fiction
                </Link>
              </label>
            </div>

            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="thriller"
                name="bookGenre"
                value="Thriller"
              />
              <label className={classes.label} htmlFor="thriller">
                <Link className={classes.link} to="/Thriller">
                  Thriller
                </Link>
              </label>
            </div>
            <div className={classes.option}>
              <input
                type="radio"
                className={classes.radio}
                id="young_adult"
                name="bookGenre"
                value="Young_adult"
              />
              <label className={classes.label} htmlFor="young_adult">
                <Link className={classes.link} to="/Young_adult">
                  Young Adult
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
