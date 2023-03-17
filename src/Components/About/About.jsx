import React from "react";
import styles from "./About.module.scss";
import SectionHeader from "../SectionHeader/SectionHeader";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <SectionHeader heading="About" />
      <div className={styles.aboutSection__textHolder}>
        <p>
          Hi there<span className={styles.wave}>&#128075;&#127996;</span>, let me introduce myself briefly, my name is Anthony, and with the aim of becoming a developer, I embarked on a software development bootcamp with _Nology. The course focused on modern market-driven languages, frameworks and tools for web development, during which I learnt to develop responsive web apps with the aim of writing clean DRY code, primarily using JS and React. I became familiar with the fundamentals of programming by adopting the principles of TDD, semantic html, unit testing, OOP and functional programming.
        </p>
        <p>
          After my university studies, I went on to establish my own business in the automotive sector in London. Managing a business, you learn the need to adopt different viewpoints i.e those of the business and client, in order to provide satisfying outcomes for all parties. Working in an ever-increasing technology driven environment it became apparent that I had to think along the lines of "why/how the software program is designed/functions?" in order to be effective and efficient (adapt/evolve or fade away...).
        </p>
        <p>
          With having a passion for all things tech and the admiration of the power of languages, this led me to explore the world of coding. The aspect of building solutions and breaking down complex problems down into smaller or simplier processes in that "logic mindest" felt like a great blend of the two in my next career journey.<br />
          Especially, as I believe in the motto of "you learn something new each day", which the world of tech/code never fails to deliver!
        </p>
        <p>
          When not lost in the many of lines of code, my distraction, as lover of House and UK garage music, is mixing records on the turntables &#x1F3A7;(Technic 1210's, for those in the know!). You can also find me watching the ups and downs of arsenal football club &#x26BD; or out catching up with friends and exploring new places with good food and drinks &#x1f37d;&#x1f378;.    
        </p>
      </div>
    </section>
  );
};

export default About;
