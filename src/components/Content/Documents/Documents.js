import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hocs/withAuthRedirect";
import styles from "./Documents.module.css";

const Documents = () => {
  return <div className={styles.documentsContainer}>Documents</div>;
};

const mapStateToProps = (state) => {
  return {
    documents: state.contentDocuments.users,
    findDocumentBody: state.contentDocuments.findDocumentBody,
    pagesCount: state.contentDocuments.pagesCount,
    totalDocumentsCount: state.contentDocuments.totalDocumentsCount,
    numPerPage: state.contentDocuments.numPerPage,
    currentPage: state.contentDocuments.currentPage,
  };
};

export default compose(
  connect(mapStateToProps, null),
  withAuthRedirect
)(Documents);
