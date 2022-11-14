import React from "react";
import styles from "./About.module.scss";
import SectionHeader from "../SectionHeader/SectionHeader";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <SectionHeader heading="About" />
      <div className={styles.aboutSection__textHolder}>
        <p>
          Hi there<span className={styles.wave}>&#128075;&#127996;</span>, let me introduce myself briefly, my name is Anthony, and with the aim of becoming a developer, I have successfully completed a software development bootcamp course with Nology. The course focused on modern market driven languages, frameworks and tools for web development, during which I learnt to develop responsive web apps with the aim of writing DRY code, primarily using JS and React. Became familiar with the fundamentals of programming by adopting the principles of TDD, semantic html, unit testing, OOP and functional programming that I was taught.
        </p>
        <p>
          After my university studies, in London and Paris, I went on to establish my own business in the automotive sector. The combination of being "tech-minded" and the soft-skills gained from running a business feels like a skill-set that is well suited to working in the tech across all sectors.<br /> 
          Working in an ever-increasing technology driven environment it became apparent that I had to think along the lines of "why/how the software program is designed/functions?" in order to be effective and efficient (adapt/evolve or fade away...).
        </p>
        <p>
          This led me to explore the world of coding and, having a passion for tech and languages, with the aspect of building solutions and/or breaking down complex problems down into smaller or simplier processes in that "logic mindest" felt like a great blend of the two in my next career journey.<br />
          Especially, as I believe in the motto of " you learn something new each day ", which the world of tech/code never fails to deliver!
        </p>
      </div>
    </section>
  );
};

export default About;
