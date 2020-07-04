import {
  IMAGES_CHANGE_FIND_IMAGES_BODY,
  IMAGES_RESET_FIND_IMAGES_BODY,
} from "../types/types";

const initialState = {
  findImagesBody: "",
  currentPage: 1,
  totalImagesCount: null,
  numPerPage: 10,
};

export const contentImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES_CHANGE_FIND_IMAGES_BODY:
      return Object.assign({}, state, { findImagesBody: action.payload });
    case IMAGES_RESET_FIND_IMAGES_BODY:
      return Object.assign({}, state, { findImagesBody: "" });
    default:
      return state;
  }
};
