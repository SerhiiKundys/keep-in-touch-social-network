import React from "react";
import styles from "./Contact.module.css";
import defaultUserImg from "../../../../assets/images/user-icon.png";

const Contact = ({ username, img, id, followed }) => {
  return (
    <div className={styles.contactContainer}>
      <img src={img != null ? img : defaultUserImg} alt="Contact" />
      <p>{username}</p>
    </div>
  );
};

export default Contact;
