import {
  FEEDS_CHANGE_FIND_FEEDS_BODY,
  FEEDS_RESET_FIND_FEEDS_BODY,
} from "../types/types";

const initialState = {
  feeds: [],
  findFeedsBody: "",
  currentPage: 1,
  totalFeedsCount: null,
  numPerPage: 10,
  pagesCount: null,
};

export const contentFeedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEEDS_CHANGE_FIND_FEEDS_BODY:
      return Object.assign({}, state, { findFeedsBody: action.payload });
    case FEEDS_RESET_FIND_FEEDS_BODY:
      return Object.assign({}, state, { findFeedsBody: "" });
    default:
      return state;
  }
};
