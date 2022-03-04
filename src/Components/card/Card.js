import React from 'react';
import { useState } from 'react/cjs/react.development';
import Modal from '../modal/Modal';
import classes from './Card.module.css';

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let authors = item.volumeInfo.authors && item.volumeInfo.authors;
        let categories =
          item.volumeInfo.categories && item.volumeInfo.categories;
        if (thumbnail !== undefined && categories !== undefined) {
          return (
            <>
              <div
                className={classes.card}
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="/" />
                <div className={classes.bottom}>
                  <p>{categories}</p>
                  <hr />
                  <h3 className={classes.title}>{item.volumeInfo.title}</h3>
                  <p>{authors}</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
