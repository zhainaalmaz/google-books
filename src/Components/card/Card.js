import React from 'react';
import { useState } from 'react/cjs/react.development';
import Modal from '../modal/Modal';
import classes from './Card.module.css';
const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail !== undefined && amount !== undefined) {
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
                  <h3 className={classes.title}>{item.volumeInfo.title}</h3>
                  <p className={classes.amount}>{amount} $</p>
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
