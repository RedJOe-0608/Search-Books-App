import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const useStyles = makeStyles({
  searchField: {
    width: "40vw",
    background: "#f7f7fa",
    color: "black",
  },
  searchIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const Search = ({ bookName, onChange, onClick }) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        variant="filled"
        required
        className={classes.searchField}
        label="Enter the Book name (And the author name for more accurate results)"
        value={bookName}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon className={classes.searchIcon} onClick={onClick} />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default Search;
