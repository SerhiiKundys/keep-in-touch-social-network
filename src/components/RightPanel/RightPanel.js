import React from "react";
import { connect } from "react-redux";
import Chat from "./Chat/Chat";
import Contacts from "./Contacts/Contacts";
import styles from "./RightPanel.module.css";

const RightPanel = ({ activePanel }) => {
  return (
    <div className={styles.panelContainer}>
      {activePanel === "contacts" ? <Contacts /> : <Chat />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activePanel: state.chat.activePanel,
  };
}

export default connect(mapStateToProps, null)(RightPanel);
