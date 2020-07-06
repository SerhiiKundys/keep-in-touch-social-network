import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hocs/withAuthRedirect";
import styles from "./Music.module.css";

const Music = () => {
  return <div className={styles.musicContainer}>Music</div>;
};

const mapStateToProps = (state) => {
  return {
    music: state.contentMusic.music,
    findMusicBody: state.contentMusic.findMusicBody,
    pagesCount: state.contentMusic.pagesCount,
    totalMusicCount: state.contentMusic.totalMusicCount,
    numPerPage: state.contentMusic.numPerPage,
    currentPage: state.contentMusic.currentPage,
  };
};

export default compose(connect(mapStateToProps, null), withAuthRedirect)(Music);
