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
        &#47;&#47; About 
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
        &#47;&#47; Projects
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
        &#47;&#47; Skills
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
        &#47;&#47; Contact
      </Link>
    </nav>
  );
};

export default NavBar;
