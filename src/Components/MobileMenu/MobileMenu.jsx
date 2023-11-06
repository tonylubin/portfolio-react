import NavBar from "../NavBar/NavBar";
import styles from "./MobileMenu.module.scss";

const MobileMenu = ({ menuOpen, handleClick }) => {

  return (

        <div className={`${styles.menu} ${menuOpen && styles.showMenu}`}>
          <NavBar handleClick={handleClick} />
        </div>
  
  );
};

export default MobileMenu;
