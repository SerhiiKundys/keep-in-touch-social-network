import { PROFILE_CHANGE_USER_ID } from "../types/types";

const initialState = {
  profileId: null,
};

export const contentProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_CHANGE_USER_ID:
      return Object.assign({}, state, { profileId: action.id });
    default:
      return state;
  }
};
