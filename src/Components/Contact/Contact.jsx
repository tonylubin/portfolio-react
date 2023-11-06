import SectionHeader from "../SectionHeader/SectionHeader";
import Icon from "../Icon/Icon";
import Email from "../../Components/SvgIconPaths/Email";
import Github from "../../Components/SvgIconPaths/Github";
import Instagram from "../../Components/SvgIconPaths/Instagram";
import styles from "./Contact.module.scss";

const Contact = () => {
  const urls = {
    github: "http://github.com/tonylubin",
    email: "anthonylubin@outlook.com",
    instagram: "https://www.instagram.com/anthonylubin78",
  };

  return (
    <section className={styles.contactSection} id="contact">
      <SectionHeader heading="Contact" />
      <div className={styles.contactSection__container}>
        <div className={styles.emailHeading}>
          <h3>Email:</h3>
          <Icon classname={styles.iconSvg} path={<Email />} />
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
          >
            <Icon classname={styles.iconSvg} path={<Github />} />
          </a>
          <a
            className={styles.linkHover}
            href={urls.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram classname={styles.iconSvg} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
