import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import SkillsCard from "../../Components/SkillsCard/SkillsCard";
import styles from "./SkillsList.module.scss";
import Icon from "../../Components/Icon/Icon";
import { techSkills } from "../../assets/data/skillsData";
import { Zoom } from "react-awesome-reveal";

const SkillsList = () => {

  const getSkillsCards = techSkills.map((skill, index) => (
    <Zoom key={index}>
      <SkillsCard
        icon={<Icon path={skill.icon} classname={styles.icon}/>}
        title={skill.title}
      />
    </Zoom>
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
        <p><span className={styles.skillsExtra__info}>JAVASCRIPT:</span> ES6+, Asynchronous & Functional programming, OOP(Classes), RESTful API&apos;s, DOM manipulation, JSON</p>
        <p><span className={styles.skillsExtra__info}>REACT & NEXTJS:</span> hooks, context, functional components</p>
        <h3>BACKEND</h3>
        <p><span className={styles.skillsExtra__info}>NODE.JS:</span> vanilla, Express, EJS</p>
        <p><span className={styles.skillsExtra__info}>DATABASES:</span> NoSQL - MongoDB & Mongoose, Cloud Firestore // <span> SQL - PostgreSQL</span></p>
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
