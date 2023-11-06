import TypewriterComponent from "typewriter-effect";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <section className={styles.landingPage} id="landing-page">
      <div className={styles.landingPage__greeting}>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter.pauseFor(50).changeDelay(85)
            .typeString("<span style='font-weight: 700; font-size: clamp(1.9rem, 5vw, 2.5rem);'>Hello</span>, (tech world),</br>")
            .typeString("<span style='font-weight: 700';'>I'm Anthony Lubin, </span>a web developer based in London. </br>")
            .typeString("</br><span style='font-weight: 700;'>Please </span>scroll down to</br>")
            .typeString("<span style='font-weight: 700;'>Enter</span>.....")
            .start();
          }}        
        />
       </div>
    </section>
  );
};

export default LandingPage;
