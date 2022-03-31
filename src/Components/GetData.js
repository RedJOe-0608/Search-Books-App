import React from "react";
import { Grid } from "@mui/material";
import { useState } from "react";
import BookCard from "./BookCard";
import Search from "./Search";
import LayoutSearch from "./LayoutSearch";
import { motion } from "framer-motion";

const GetData = ({ mode }) => {
  const apiKey = "AIzaSyCY0eWabyheuexkFOtxhWJ4GtemDmhgE5M";
  const [value, setValue] = useState(false);
  const [bookDetails, setBookDetails] = useState([]);
  const [bookName, setBookName] = useState("");

  const deleteCard = (id) => {
    setBookDetails(bookDetails.filter((book) => book.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const renderDetails = async () => {
      setValue(false);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=16&key=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      console.log(data.items);
      setBookDetails(data.items);
      setValue(true);
    };

    renderDetails();
  };

  const handleChange = (e) => {
    setBookName(e.target.value);
  };

  return (
    <>
      <LayoutSearch mode={mode} value={value}>
        <form noValidate onSubmit={handleSubmit}>
          <Search
            bookname={bookName}
            onChange={handleChange}
            onClick={handleSubmit}
          />
        </form>
      </LayoutSearch>

      {console.log(value)}
      {value ? (
        <>
          <motion.div transition={{ duration: 1 }}>
            <Grid container spacing={2}>
              {bookDetails.map((item) => {
                console.log(item.volumeInfo.title);
                return (
                  <>
                    <Grid item key={item.id} xs={12} sm={6} md={3}>
                      <BookCard
                        deleteCard={deleteCard}
                        mode={mode}
                        id={item.id}
                        title={item.volumeInfo.title}
                        author={
                          item.volumeInfo.authors === undefined
                            ? ""
                            : item.volumeInfo.authors[0]
                        }
                        description={item.volumeInfo.description}
                        publisher={item.volumeInfo.publisher}
                        img={
                          item.volumeInfo.imageLinks === undefined
                            ? ""
                            : item.volumeInfo.imageLinks.thumbnail
                        }
                        link={item.volumeInfo.canonicalVolumeLink}
                        pageCount={item.volumeInfo.pageCount}
                        averageRating={item.volumeInfo.averageRating}
                        language={
                          item.volumeInfo.language === undefined
                            ? ""
                            : item.volumeInfo.language
                        }
                      />
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </motion.div>
        </>
      ) : null}
    </>
  );
};

export default GetData;
