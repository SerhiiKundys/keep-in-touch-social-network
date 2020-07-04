import React from "react";
import { Route } from "react-router-dom";
import Feed from "./Feed/Feed";
import Users from "./Users/Users";
import Profile from "./Profile/Profile";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <Route path="/feed" component={Feed} />
      <Route path="/profile/:userId" component={Profile} />
      <Route path="/users" component={Users} />
    </div>
  );
};

export default Content;
