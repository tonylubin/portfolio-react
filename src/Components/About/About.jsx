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
          After my university studies, in London and Paris, I went on
          to establish my own business in the automotive sector. Before embarking on my new journey of training to be a web developer I took the step of doing online coding courses to decide whether it would be the right direction to take. With a passion about languages and technology, I felt that the skills and mindset, garnered during my studies and work, would be compatable within the world of coding.      
        </p>
      </div>
    </section>
  );
};

export default About;
