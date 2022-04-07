import React from "react";
import styles from "./About.module.scss";
import SectionHeader from "../SectionHeader/SectionHeader";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <SectionHeader heading="About" />
      <div className={styles.aboutSection__textHolder}>
        <p>
          Hi there<span className={styles.wave}>&#128075;&#127996;</span>,let me introduce myself briefly, my name is Anthony Lubin and I am currently on a software development bootcamp course with Nology.
        </p>
        <p>
          After my university studies, in London and Paris, I went on to establish my own business in the automotive sector. Working in an ever-increasing technology driven environment it became apparent that one had to think along the lines of "why/how the software program is designed/functions?" in order to be effective and efficient (adapt/evolve or fade away).
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
