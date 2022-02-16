import React from 'react';
import classes from './Modal.module.css';
const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
      <div className={classes.overlay}>
        <div className={classes.overlayInner}>
          <button className={classes.close} onClick={onClose}>
            close
          </button>
          <div className={classes.innerBox}>
            <img src={thumbnail} alt="/" />
            <div className={classes.info}>
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}{' '}
                <span>{item.volumeInfo.publisherDate}</span>
                <br />
                <a href={item.volumeInfo.previewLink}>
                  <button>Load more</button>
                </a>
              </h4>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
