import Hamburger from "hamburger-react";
import { Tooltip } from "react-tooltip";
import styles from "./Header.module.scss";

const Header = (props) => {

  const { menuOpen, handleClick } = props;

  return (
    <header className={styles.heading}>
      <div
        data-tooltip-id="menu-icon"
        data-tooltip-content="Menu"
        data-tooltip-place="bottom"
        data-tooltip-variant="dark"
        data-tooltip-offset={20}
      >
        <Hamburger
        rounded={true}
        color="#0efc5b"
        toggled={menuOpen}
        toggle={handleClick}
        className={styles.heading__menu}
        />
      </div>
      <Tooltip id="menu-icon" />
    </header>
  )  
};

export default Header;
