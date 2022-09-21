import React, { useState } from "react";
import Button from "../Button/Button";
import SkillsTechList from "../SkillsTechList/SkillsTechList";
import { codeSvg, viewSvg } from "../../data/skillsData.js";
import styles from "./ProjectCard.module.scss";


const ProjectCard = (props) => {
  
  const [ showInfo, setShowInfo ] = useState(false);
  
  const showText = () => setShowInfo(true);
  const hideText = () => setShowInfo(false);

  return (  
    <article
      className={
          `${styles.projectContainer} ${props.isReversed ? styles.projectContainerReverse : ""}`
      }
    >
      <div className={`${styles.projectContainer__image} ${props.isReversed ? styles.reverseOrderImg: ""}`}>
        <p className={`${styles.textInfo} ${showInfo ? styles.textInfoReveal : ""}`}>{props.info}</p>
        <img src={props.imageUrl} alt={props.imageAlt} />
      </div>
      <div className={styles.projectContainer__info}>
        <h2 className={styles.projectContainerTitle}>{props.title}</h2>
        <div className={styles.info} onMouseEnter ={showText} onMouseLeave = {hideText}>MORE INFO</div>
        <SkillsTechList techstackIcons={props.techstackIcons} />
        <div className={styles.projectContainerBtnHolder}>
          <a href={props.projectViewUrl} target="_blank" rel="noopener noreferrer">
            <Button text="view" width="1.6rem" height="1.6rem" viewBox={viewSvg.viewBox} svgInfo={viewSvg.svgInfo} />
          </a>
          <a href={props.projectCodeUrl} target="_blank" rel="noopener noreferrer">
            <Button text="code" width="1.6rem" height="1.6rem" viewBox={codeSvg.viewBox} svgInfo={codeSvg.svgInfo} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
