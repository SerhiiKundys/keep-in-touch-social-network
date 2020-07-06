/* import {
    CHAT_ADD_NEW_MESSAGE,
  } from "../types/types"; */

// TEST INITIAL_STATE --------------
const initialState = {
  username: null,
  location: {
    country: null,
    city: null,
  },
  id: null,
  img: null,
  isLogined: false,
};
// ---------------------------------

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    /* case CHAT_CHANGE_MESSAGE_BODY:
        return Object.assign({}, state, { messageBody: action.newBody }); */
    default:
      return state;
  }
};
