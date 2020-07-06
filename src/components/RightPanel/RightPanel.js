import React from "react";
import { connect } from "react-redux";
import Chat from "./Chat/Chat";
import Contacts from "./Contacts/Contacts";
import styles from "./RightPanel.module.css";

const RightPanel = ({ activePanel, isLogined }) => {
  return isLogined ? (
    <div className={styles.panelContainer}>
      {activePanel === "contacts" ? <Contacts /> : <Chat />}
    </div>
  ) : (
    <div className={styles.panelContainer}>
      <h1>Login or Register</h1>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activePanel: state.chat.activePanel,
    isLogined: state.auth.isLogined,
  };
}

export default connect(mapStateToProps, null)(RightPanel);
