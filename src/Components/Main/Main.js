import React, { useState } from 'react';
import classes from './Main.module.css';
import Card from '../card/Card';
import axios from 'axios';
const Main = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);
  const searchBook = (e) => {
    if (e.key === 'Enter') {
      axios
        .get(
          'https://www.googleapis.com/books/v1/volumes?q=' +
            search +
            '&key=AIzaSyDTNweMeQ0EnruJzsah_530VpObDaGlqWI' +
            '&maxResults=40'
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
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
            <button>Search</button>
          </div>
          {/* <img
            src={
              'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
            }
            alt="/"
          /> */}
        </div>
      </div>
      <div className={classes.container}>{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
