import React from "react";
import HamburgerMenu from "react-hamburger-menu";
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
        data-tooltip-variant="info"
        data-tooltip-offset={20}
      >
        <HamburgerMenu
        color="#c3dcaf"
        isOpen={menuOpen}
        menuClicked={handleClick}
        className={styles.heading__menu}
        />
      </div>
      <Tooltip id="menu-icon" />
    </header>
  )  
};

export default Header;
