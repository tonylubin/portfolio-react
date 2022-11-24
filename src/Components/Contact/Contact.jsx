import React from "react";
import ReactTooltip from "react-tooltip";
import SectionHeader from "../SectionHeader/SectionHeader";
import SkillIcon from "../SkillIcon/SkillIcon";
import { gitHubSvg, emailSvg, instaSvg } from "../../data/skillsData";
import styles from "./Contact.module.scss";

const Contact = () => {
  const urls = {
    github: "http://github.com/tonylubin",
    linkedin: "http://linkedin.com",
    email: "anthonylubin@outlook.com",
    instagram: "https://www.instagram.com/anthonylubin78"
  };

  return (
    <section className={styles.contactSection} id="contact">
      <SectionHeader heading="Contact" />
      <div className={styles.contactSection__container}>
        <div className={styles.emailHeading}>
          <h3>Email:</h3>
          <SkillIcon width="2em" height="2em" viewBox={emailSvg.viewBox} svgInfo={emailSvg.svgInfo} /> 
          <a
            className={styles.emailHeading__link}
            href={`mailto:${urls.email}`}
          >
            {urls.email}
          </a>
        </div>
        <div className={styles.iconContainer}>
          <a
            className={styles.linkHover}
            href={urls.github}
            target="_blank"
            rel="noreferrer"
            data-tip
            data-for="gh"
          >
            <SkillIcon width="2em" height="2em" viewBox={gitHubSvg.viewBox} svgInfo={gitHubSvg.svgInfo}/>
          </a>
          <ReactTooltip id="gh" place="bottom" effect="solid">
            Vist my Github page
          </ReactTooltip>
          {/* <a
            className={styles.linkHover}
            href={urls.linkedin}
            target="_blank"
            rel="noreferrer"
            data-tip
            data-for="lkdn"
          >
            <SkillIcon width="2em" height="2em" viewBox={linkedInSvg.viewBox} svgInfo={linkedInSvg.svgInfo}/>
          </a>
          <ReactTooltip id="lkdn" place="bottom" effect="solid">
            Vist my LinkedIn page
          </ReactTooltip> */}
          <a
            className={styles.linkHover}
            href={urls.instagram}
            target="_blank"
            rel="noreferrer"
            data-tip
            data-for="insta"
          >
            <SkillIcon width="2em" height="2em" viewBox={instaSvg.viewBox} svgInfo={instaSvg.svgInfo}/>
          </a>
          <ReactTooltip id="insta" place="bottom" effect="solid">
            Take a peek at my Insta
          </ReactTooltip>
        </div>
      </div>
    </section>
  );
};

export default Contact;
