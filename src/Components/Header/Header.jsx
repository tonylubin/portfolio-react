import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import styles from "./Header.module.scss";

const Header = (props) => {

  const { menuOpen, handleClick } = props;

  return (
    <header className={styles.heading}>
      <HamburgerMenu
      color="#c3dcaf"
      isOpen={menuOpen}
      menuClicked={handleClick}
    />
    </header>
  )  
};

export default Header;
