import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.heading}>
      <NavBar />
    </header>
  );
};

export default Header;
