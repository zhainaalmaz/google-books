import React, { useState } from 'react';
import classes from './Main.module.css';
import Card from '../card/Card';
import axios from 'axios';

const Main = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);
  const searchBook = () => {
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          search +
          '&key=AIzaSyDTNweMeQ0EnruJzsah_530VpObDaGlqWI' +
          '&maxResults=40'
      )
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className={classes.header}>
        <div className={classes.row1}>
          <h1>Search for books</h1>
        </div>
        <div className={classes.row2}>
          <h2>Find your book</h2>
          <div className={classes.search}>
            <input
              type="text"
              placeholder="Enter your book name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button onClick={searchBook}>Search</button>
          </div>
        </div>
      </div>

      <div className={classes.container}>{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
