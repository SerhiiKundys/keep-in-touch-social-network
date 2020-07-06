import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hocs/withAuthRedirect";
import styles from "./Images.module.css";

const Images = () => {
  return <div className={styles.imagesContainer}>Images</div>;
};

const mapStateToProps = (state) => {
  return {
    images: state.contentImages.images,
    findImagesBody: state.contentImages.findImagesBody,
    pagesCount: state.contentImages.pagesCount,
    totalImagesCount: state.contentImages.totalImagesCount,
    numPerPage: state.contentImages.numPerPage,
    currentPage: state.contentImages.currentPage,
  };
};

export default compose(
  connect(mapStateToProps, null),
  withAuthRedirect
)(Images);
