import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactTooltip from "react-tooltip";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Contact.module.scss";

const Contact = () => {
  const urls = {
    github: "http://github.com/tonylubin",
    linkedin: "http://linkedin.com",
    email: "anthonylubin@yahoo.co.uk",
  };

  return (
    <section className={styles.contactSection} id="contact">
      <SectionHeader heading="Contact" />
      <div className={styles.contactSection__container}>
        <div className={styles.emailHeading}>
          <h3>Email:</h3>
          <FontAwesomeIcon icon="fa-solid fa-envelope" size="2x" inverse />
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
            <FontAwesomeIcon icon="fa-brands fa-github" size="2x" inverse />
          </a>
          <ReactTooltip id="gh" place="bottom" effect="solid">
            Vist my Github page
          </ReactTooltip>
          <a
            className={styles.linkHover}
            href={urls.linkedin}
            target="_blank"
            rel="noreferrer"
            data-tip
            data-for="lkdn"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" inverse />
          </a>
          <ReactTooltip id="lkdn" place="bottom" effect="solid">
            Vist my LinkedIn page
          </ReactTooltip>
        </div>
      </div>
    </section>
  );
};

export default Contact;
