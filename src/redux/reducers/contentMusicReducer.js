import {
  MUSIC_CHANGE_FIND_MUSIC_BODY,
  MUSIC_RESET_FIND_MUSIC_BODY,
} from "../types/types";

const initialState = {
  findMusicBody: "",
  currentPage: 1,
  totalMusicCount: null,
  numPerPage: 10,
};

export const contentMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case MUSIC_CHANGE_FIND_MUSIC_BODY:
      return Object.assign({}, state, { findMusicBody: action.payload });
    case MUSIC_RESET_FIND_MUSIC_BODY:
      return Object.assign({}, state, { findMusicBody: "" });
    default:
      return state;
  }
};
