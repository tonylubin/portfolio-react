import React from "react";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import SkillsCard from "../../Components/SkillsCard/SkillsCard";
import styles from "./SkillsList.module.scss";
import { techSkills } from "../../data/skillsData";
import SkillIcon from "../../Components/SkillIcon/SkillIcon";

const SkillsList = () => {

  const getSkillsCards = techSkills.map((skillcard, index) => (

    <SkillsCard
      key={index}
      icon={<SkillIcon svgInfo={skillcard.svgInfo} viewBox={skillcard.viewBox} width="3em" height="3em"/>}
      title={skillcard.title}
    />

  ));

  return (
    <>
      <section className={styles.skillsList} id="skills">
        <SectionHeader heading="Skills" />
        <div className={styles.skillsList__container}>
          {getSkillsCards}
        </div>
      </section>
      <section className={styles.skillsExtra}>
        <h3>FRONTEND</h3>
        <p><span className={styles.skillsExtra__info}>HTML5:</span> including semantic html and accessibility best practices</p>
        <p><span className={styles.skillsExtra__info}>CSS3:</span> responsive design, Flexbox, CSS Grid, SASS, CSS Modules & Frameworks</p>
        <p><span className={styles.skillsExtra__info}>JAVASCRIPT:</span> ES6+, Asynchronous & Functional programming, OOP(Classes), RESTful API's, DOM manipulation, JSON</p>
        <p><span className={styles.skillsExtra__info}>REACT:</span> hooks, context, functional components</p>
        <h3>BACKEND</h3>
        <p><span className={styles.skillsExtra__info}>NODE.JS:</span> vanilla, Express, EJS</p>
        <p><span className={styles.skillsExtra__info}>DATABASES:</span> NoSQL - MongoDB & Mongoose, Cloud Firestore</p>
        <p><span className={styles.skillsExtra__info}>FIREBASE:</span> hosting & authentication</p>
        <h3>FUNDAMENTALS</h3>
        <p><span className={styles.skillsExtra__info}>VERSION CONTROL:</span> Git & Github</p>
        <p><span className={styles.skillsExtra__info}>UNIT TESTING:</span> Jest & Enzyme</p>
        <p><span className={styles.skillsExtra__info}>TOOLS:</span> Figma, Postman, Trello, CLI, VS code</p>
      </section>
    </>
  );    
};

export default SkillsList;
