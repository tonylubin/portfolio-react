import { useState } from "react";
import SkillsTechList from "../SkillsTechList/SkillsTechList";
import Code from "../../Components/SvgIconPaths/Code";
import Link from "../../Components/SvgIconPaths/Link";
import styles from "./ProjectCard.module.scss";
import CardLink from "../CardLink/CardLink";

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
            <CardLink
              url={projectViewUrl}
              text={"View"}
              icon={<Link width="1.6rem" height="1.6rem" />}
            />
          ) : null}
          <CardLink
            url={projectCodeUrl}
            text={"Code"}
            icon={<Code width="1.6rem" height="1.6rem" />}
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
