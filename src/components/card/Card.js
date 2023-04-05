import React from "react";
import styles from "./Card.module.scss";

const Card = ({ children, cardClass }) => {
  return <div className={`${styles.Card} ${styles.cardClass}`}>{children}</div>;
};

export default Card;
