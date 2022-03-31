import React from "react";
import Button from "../Button/Button";
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
        <div className={styles.projectContainerBtnHolder}>
          <a href={props.projectViewUrl} target="_blank" rel="noopener noreferrer">
            <Button text="view" icon="fa-regular fa-eye" />
          </a>
          <a href={props.projectCodeUrl} target="_blank" rel="noopener noreferrer">
            <Button text="code" icon="fa-solid fa-code" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
