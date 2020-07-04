import React from "react";
import styles from "./NavChat.module.css";
import NavButton from "./NavButton/NavButton";

const NavChat = () => {
  return (
    <nav className={styles.navChat}>
      <NavButton title="Contacts" />
      <NavButton title="Chat" />
    </nav>
  );
};

export default NavChat;
