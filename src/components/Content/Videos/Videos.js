import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hocs/withAuthRedirect";
import styles from "./Videos.module.css";

const Videos = () => {
  return <div className={styles.videosContainer}>Videos</div>;
};

const mapStateToProps = (state) => {
  return {
    videos: state.contentVideos.videos,
    findVideosBody: state.contentVideos.findVideosBody,
    pagesCount: state.contentVideos.pagesCount,
    totalVideosCount: state.contentVideos.totalVideosCount,
    numPerPage: state.contentVideos.numPerPage,
    currentPage: state.contentVideos.currentPage,
  };
};

export default compose(
  connect(mapStateToProps, null),
  withAuthRedirect
)(Videos);
