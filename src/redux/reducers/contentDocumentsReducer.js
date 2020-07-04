import {
  DOCUMENTS_CHANGE_FIND_DOCUMENTS_BODY,
  DOCUMENTS_RESET_FIND_DOCUMENTS_BODY,
} from "../types/types";

const initialState = {
  findDocumentBody: "",
  currentPage: 1,
  totalDocumentsCount: null,
  numPerPage: 10,
};

export const contentDocumentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOCUMENTS_CHANGE_FIND_DOCUMENTS_BODY:
      return Object.assign({}, state, { findDocumentBody: action.payload });
    case DOCUMENTS_RESET_FIND_DOCUMENTS_BODY:
      return Object.assign({}, state, { findDocumentBody: "" });
    default:
      return state;
  }
};
