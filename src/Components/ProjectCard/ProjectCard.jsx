import React, { useState } from "react";
import Button from "../Button/Button";
import SkillsTechList from "../SkillsTechList/SkillsTechList";
import { codeSvg, viewSvg } from "../../data/skillsData.js";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
  const {
    title,
    info,
    imageUrl,
    imageAlt,
    isReversed,
    projectViewUrl,
    projectCodeUrl,
    techstackIcons,
  } = props;

  const [showInfo, setShowInfo] = useState(false);

  const showText = () => setShowInfo(true);
  const hideText = () => setShowInfo(false);

  return (
    <article
      className={`${styles.projectContainer} ${
        isReversed ? styles.projectContainerReverse : ""
      }`}
    >
      <div
        className={`${styles.projectContainer__image} ${
          isReversed ? styles.reverseOrderImg : ""
        }`}
      >
        <p
          className={`${styles.textInfo} ${
            showInfo ? styles.textInfoReveal : ""
          }`}
        >
          {info}
        </p>
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className={styles.projectContainer__info}>
        <h2 className={styles.projectContainerTitle}>{title}</h2>
        <div
          className={styles.info}
          onMouseEnter={showText}
          onMouseLeave={hideText}
        >
          MORE INFO
        </div>
        <SkillsTechList techstackIcons={techstackIcons} />
        <div className={styles.projectContainerBtnHolder}>
          {projectViewUrl ? (
            <a href={projectViewUrl} target="_blank" rel="noopener noreferrer">
              <Button
                text="view"
                width="1.6rem"
                height="1.6rem"
                viewBox={viewSvg.viewBox}
                svgInfo={viewSvg.svgInfo}
              />
            </a>
          ) : null}
          <a href={projectCodeUrl} target="_blank" rel="noopener noreferrer">
            <Button
              text="code"
              width="1.6rem"
              height="1.6rem"
              viewBox={codeSvg.viewBox}
              svgInfo={codeSvg.svgInfo}
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
