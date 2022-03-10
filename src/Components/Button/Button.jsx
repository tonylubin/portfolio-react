import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {

  const destinationUrl = () => {
    console.log("you clicked me")
  }

  return (
    <button className={styles.baseBtn} onClick={destinationUrl}>
      <FontAwesomeIcon icon={props.icon} size={props.size} className={styles.iconBtn} />
      {props.text}
    </button>
  )
};

export default Button;