import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavButton.module.css";
import { FaPlay } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const NavButton = ({ title, href }) => {
  return (
    <NavLink to={href} className={styles.navButtonContainer}>
      <div className={styles.navButton}>
        {title === "Feed" ? (
          <FaNewspaper color="blue" size="33" />
        ) : title === "Music" ? (
          <FaPlay color="red" size="33" />
        ) : title === "Images" ? (
          <FaImages color="green" size="33" />
        ) : title === "Videos" ? (
          <FaVideo color="orange" size="33" />
        ) : title === "Documents" ? (
          <FaFile color="darkblue" size="33" />
        ) : (
          <FaSearch color="grey" size="33" />
        )}
      </div>
      <p className={styles.title}>{title}</p>
    </NavLink>
  );
};

export default NavButton;
