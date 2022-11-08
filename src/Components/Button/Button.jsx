import React from "react";
import SkillIcon from "../SkillIcon/SkillIcon";
import styles from "./Button.module.scss";

const Button = ({ text, width, height, viewBox, svgInfo }) => {

  const destinationUrl = () => {
    console.log("you clicked me")
  }

  return (
    <button className={styles.baseBtn} onClick={destinationUrl}>
      <SkillIcon width={width} height={height} viewBox={viewBox} svgInfo={svgInfo} />
      {text}
    </button>
  )
};

export default Button;