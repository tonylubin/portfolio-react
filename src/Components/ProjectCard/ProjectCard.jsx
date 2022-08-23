import React from "react";
import Button from "../Button/Button";
import SkillsTechList from "../SkillsTechList/SkillsTechList";
import { codeSvg, viewSvg } from "../../data/skillsData.js";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
  return (  
    <article
      className={
        props.isReversed === false
          ? styles.projectContainer
          : `${styles.projectContainer} ${styles.projectContainerReverse}`
      }
    >
      <div className={styles.projectContainer__image}>
        <img src={props.imageUrl} alt={props.imageAlt} />
      </div>
      <div className={styles.projectContainer__info}>
        <h2 className={styles.projectContainerTitle}>{props.title}</h2>
      <p className={styles.textInfo}>{props.info}</p>
        {/* <div className={styles.info}>INFO</div> */}
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
