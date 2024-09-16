import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css"
import RedditLogo from "../../Reddit-Logo.png";

const Header = () => {
  return (
    <>
      <div className={styles.HeaderContainer} >
        <div>
          <img src={RedditLogo} alt="Reddit Logo" /><h1 className={styles.minimal}>Minimal</h1>
        </div>
        <div className={styles.SearchBar}>
          <SearchBar />
        </div>
        <div className={styles.ButtonsContainer}>
          <button className={styles.button1} >Get app</button>
          <button className={styles.button2} >Log In</button>
          <button className={styles.button3} >. . .</button>
        </div>
      </div>
    </>
  );
};

export default Header;
