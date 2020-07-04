import React from "react";
import styles from "./Header.module.css";
import NavUser from "./NavUser/NavUser";
import Navbar from "./Navbar/Navbar";
import NavChat from "./NavChat/NavChat";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavUser nickname="Test User" />
      <Navbar />
      <NavChat />
    </div>
  );
};

export default Header;
