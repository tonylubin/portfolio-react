import React from "react";
import styles from "./About.module.scss";
import SectionHeader from "../SectionHeader/SectionHeader";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <SectionHeader heading="About" />
    </section>
  );
};

export default About;
