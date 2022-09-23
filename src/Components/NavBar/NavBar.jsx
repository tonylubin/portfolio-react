import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-scroll";

const NavBar = ({ handleClick }) => {

  return (
    <nav className={styles.navbar}>
      <Link
        className={styles.navbar__link}
        to="about"
        spy={true}
        smooth={true}
        duration={2000}
        offset={-50}
        onClick={handleClick}
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
        onClick={handleClick}
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
        onClick={handleClick}
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
        onClick={handleClick}
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
