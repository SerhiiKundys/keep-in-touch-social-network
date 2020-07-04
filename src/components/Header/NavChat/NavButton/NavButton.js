import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../../../redux/actions/actions";
import styles from "./NavButton.module.css";
import { FaUsers } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

const NavButton = ({ title, changeActivePanel, activePanel }) => {
  return (
    <button
      className={styles.navButtonContainer}
      onClick={() => {
        if (
          (title === "Contacts" && activePanel === "chat") ||
          (title === "Chat" && activePanel === "contacts")
        ) {
          changeActivePanel();
        }
      }}
    >
      <div className={styles.navButton}>
        {title === "Contacts" ? (
          <FaUsers color="rgb(25, 117, 255)" size="33" />
        ) : (
          <FaComments color="rgb(25, 117, 255)" size="33" />
        )}
      </div>
      <p className={styles.title}>{title}</p>
    </button>
  );
};

function mapStateToProps(state) {
  return {
    activePanel: state.chat.activePanel,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeActivePanel: () => dispatch(Actions.changeActivePanel()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);
