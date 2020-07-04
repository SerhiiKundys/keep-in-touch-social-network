import React from "react";
import { connect } from "react-redux";
import styles from "./Contacts.module.css";
import Contact from "./Contact/Contact";
import * as Actions from "../../../redux/actions/actions";

const Contacts = (props) => {
  return (
    <div className={styles.contactsContainer}>
      {props.users
        .filter((user) => (user.followed ? true : false))
        .map((user) => (
          <Contact
            username={user.username}
            img={user.img}
            id={user.id}
            key={user.id}
          />
        ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.contentUsers.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeFollowingUser: (message) => {
      dispatch(Actions.addNewMessage(message));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
