import React from "react";
import { Route } from "react-router-dom";
import Feed from "./Feed/Feed";
import Music from "./Music/Music";
import Images from "./Images/Images";
import Videos from "./Videos/Videos";
import Documents from "./Documents/Documents";
import Users from "./Users/Users";
import Profile from "./Profile/Profile";
import Auth from "./Auth/Auth";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <Route path="/feed" component={Feed} />
      <Route path="/music" component={Music} />
      <Route path="/images" component={Images} />
      <Route path="/videos" component={Videos} />
      <Route path="/documents" component={Documents} />
      <Route path="/profile/:userId" component={Profile} />
      <Route path="/users" component={Users} />
      <Route path="/auth" component={Auth} />
    </div>
  );
};

export default Content;
