import React from "react";
import styles from "./Navbar.module.css";
import NavButton from "./NavButton/NavButton";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <NavButton title="Feed" href="/feed" />
      <NavButton title="Music" href="/music" />
      <NavButton title="Images" href="/images" />
      <NavButton title="Videos" href="/videos" />
      <NavButton title="Documents" href="/documents" />
      <NavButton title="Find Users" href="/users" />
    </nav>
  );
};

export default Navbar;
