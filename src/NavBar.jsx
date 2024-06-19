import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prevStatus) => !prevStatus);
  }

  return (
    <>
      <nav className={styles.mainNav}>
        <div className={`${styles.linkgroup} ${styles.left}`}>
          <NavLink to="home" className={styles.link}>
            Personal
          </NavLink>
          <NavLink to="home" className={styles.link}>
            Business
          </NavLink>
          <NavLink to="home" className={styles.link}>
            Compare
          </NavLink>
          <NavLink to="home" className={styles.link}>
            Help
          </NavLink>
        </div>
        <div className={`${styles.linkgroup} ${styles.right}`}>
          <button className={`${styles.btn} ${styles.link}`}>Sign In</button>
          <button className={`${styles.btn} ${styles.link}`}>Register</button>
        </div>
        <div>
          <button className={styles.toggle} onClick={() => handleToggle()}>
            <GiHamburgerMenu size={30} />
          </button>
        </div>
      </nav>
      <nav className={`${styles.toggleNav} ${toggle ? styles.visible : ""}`}>
        <div className={`${styles.linkgroup} ${styles.left}`}>
          <NavLink to="home" className={styles.link}>
            Personal
          </NavLink>
          <NavLink to="home" className={styles.link}>
            Business
          </NavLink>
          <NavLink to="home" className={styles.link}>
            Compare
          </NavLink>
          <NavLink to="home" className={styles.link}>
            Help
          </NavLink>
        </div>
        <div className={`${styles.linkgroup} ${styles.right}`}>
          <button className={`${styles.btn} ${styles.link}`}>Sign In</button>
          <button className={`${styles.btn} ${styles.link}`}>Register</button>
        </div>
      </nav>
    </>
  );
}
