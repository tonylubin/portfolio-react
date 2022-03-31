import React from "react";
import TypewriterComponent from "typewriter-effect";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <section className={styles.landingPage} id="landing-page">
      <div className={styles.landingPage__greeting}>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter.pauseFor(2000)
            .typeString("<span style='font-weight: bold; font-size: 2.5rem; color: #c3dcaf;'>Hello</span>, (tech world),</br>")
            .typeString("<span style='font-weight: bold'; color: #c3dcaf;'>I'm Anthony Lubin, </span>a junior web developer based in London. </br>")
            .typeString("</br><span style='font-weight: bold; color: #c3dcaf;'>Please </span>scroll down to</br>")
            .typeString("<span style='font-weight: bold; color: #c3dcaf;'>Enter</span>.....")
            .start();
          }}        
        />
        {/* <p>
          <span className={styles.landingPage__greetingHeader}>
            &gt;_ Hello
          </span>{" "}
          (tech world),
        </p>
        <p>
          <span className={styles.landingPage__greetingBold}>
            I'm Anthony Lubin
          </span>
          , a junior web developer based in London.
        </p>
        <p className={styles.landingPage__greetingEnd}>
          <span className={styles.landingPage__greetingBold}>Please</span>{" "}
          scroll down to
        </p>
        <p className={styles.landingPage__greetingBold}>Enter.....</p> */}


      </div>
    </section>
  );
};

export default LandingPage;