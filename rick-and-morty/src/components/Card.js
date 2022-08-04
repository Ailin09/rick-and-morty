import React from "react";
import styles from "./card.module.css";

const Card = ({ image, name, status }) => {
  return (
    <div className="container">
      <div className={`card ${styles.card}`}>
        {(() => {
          if (status === "Dead") {
            return (
              <img
                className={`img-responsive border border-danger border-5 ${styles.image}`}
                src={image}
                alt=""
              />
            );
          }
          if (status === "Alive") {
            return (
              <img
                className={`img-responsive border border-success border-5 ${styles.image}`}
                src={image}
                alt=""
              />
            );
          }
          if (status === "unknown") {
            return (
              <img
                className={`img-responsive border border-dark border-5 ${styles.image}`}
                src={image}
                alt=""
              />
            );
          }
        })()}
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
