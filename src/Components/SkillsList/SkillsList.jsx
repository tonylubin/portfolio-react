import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import SkillsCard from "../SkillsCard/SkillsCard.jsx";
import styles from "./SkillsList.module.scss";

const SkillsList = () => {
  return (
    <section className={styles.skillsList} id="skills">
      <SectionHeader heading="Skills" />
      <div className={styles.skillsList__container}>
        <SkillsCard iconColor="html" icon="fa-brands fa-html5 fa-inverse" title="Html5" size="3x" />
        <SkillsCard iconColor="css3" icon="fa-brands fa-css3-alt" title="Css3" size="3x" />
        <SkillsCard iconColor="sass" icon="fa-brands fa-sass" title="Sass" size="3x" />
        <SkillsCard iconColor="js" icon="fa-brands fa-js" title="Javascript" size="3x" />
        <SkillsCard iconColor="react" icon="fa-brands fa-react" title="React" size="3x" />
        <SkillsCard iconColor="git" icon="fa-brands fa-git-alt" title="Git" size="3x" />
        <SkillsCard iconColor="github" icon="fa-brands fa-github" title="GitHub" size="3x" />
        <SkillsCard iconColor="npm" icon="fa-brands fa-npm" title="Npm" size="3x" />
        <SkillsCard iconColor="bootstrap" icon="fa-brands fa-bootstrap" title="Bootstrap" size="3x" />
        <SkillsCard iconColor="nodejs" icon="fa-brands fa-node-js" title="NodeJs" size="3x" />
        <SkillsCard iconColor="firebase" icon="fa-solid fa-database" title="Firebase" size="3x" />
      </div>
    </section>
  );
};

export default SkillsList;
