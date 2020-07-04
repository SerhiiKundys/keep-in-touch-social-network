import {
  VIDEOS_CHANGE_FIND_VIDEOS_BODY,
  VIDEOS_RESET_FIND_VIDEOS_BODY,
} from "../types/types";

const initialState = {
  findVideosBody: "",
  currentPage: 1,
  totalVideosCount: null,
  numPerPage: 10,
};

export const contentVideosReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIDEOS_CHANGE_FIND_VIDEOS_BODY:
      return Object.assign({}, state, { findVideosBody: action.payload });
    case VIDEOS_RESET_FIND_VIDEOS_BODY:
      return Object.assign({}, state, { findVideosBody: "" });
    default:
      return state;
  }
};
