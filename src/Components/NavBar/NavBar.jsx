import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link
        className={styles.navbar__link}
        to="about"
        spy={true}
        smooth={true}
        duration={2000}
        offset={-50}
      >
        About
      </Link>
      <Link
        className={styles.navbar__link}
        to="projects"
        spy={true}
        smooth={true}
        duration={2000}
        offset={-50}
      >
        Projects
      </Link>
      <Link
        className={styles.navbar__link}
        to="skills"
        spy={true}
        smooth={true}
        duration={2000}
        offset={-50}
      >
        Skills
      </Link>
      <Link
        className={styles.navbar__link}
        to="contact"
        spy={true}
        smooth={true}
        duration={2000}
        offset={-50}
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
