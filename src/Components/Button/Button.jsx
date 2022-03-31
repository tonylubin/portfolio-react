import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Button.module.scss";

const Button = ({ text, icon }) => {

  const destinationUrl = () => {
    console.log("you clicked me")
  }

  return (
    <button className={styles.baseBtn} onClick={destinationUrl}>
      <FontAwesomeIcon icon={icon} className={styles.iconBtn} />
      {text}
    </button>
  )
};

export default Button;