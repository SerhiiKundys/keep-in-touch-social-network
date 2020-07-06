import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hocs/withAuthRedirect";
import styles from "./Feed.module.css";

const Feed = () => {
  return <div className={styles.feedContainer}>Feed</div>;
};

const mapStateToProps = (state) => {
  return {
    feeds: state.contentFeeds.feeds,
    findFeedsBody: state.contentFeeds.findFeedsBody,
    pagesCount: state.contentFeeds.pagesCount,
    totalFeedsCount: state.contentFeeds.totalFeedsCount,
    numPerPage: state.contentFeeds.numPerPage,
    currentPage: state.contentFeeds.currentPage,
  };
};

export default compose(connect(mapStateToProps, null), withAuthRedirect)(Feed);
