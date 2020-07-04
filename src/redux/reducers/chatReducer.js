import {
  CHAT_ADD_NEW_MESSAGE,
  CHAT_CHANGE_MESSAGE_BODY,
  CHAT_RESET_MESSAGE_BODY,
  CHAT_CHANGE_ACTIVE_PANEL,
} from "../types/types";

// TEST INITIAL_STATE --------------
const initialState = {
  messages: ["Hello", "hello", "how are you?", "..."],
  messageBody: "",
  activePanel: "contacts",
};
// ---------------------------------

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_ADD_NEW_MESSAGE:
      return Object.assign({}, state, {
        messages: [...state.messages, action.message],
      });
    case CHAT_CHANGE_MESSAGE_BODY:
      return Object.assign({}, state, { messageBody: action.newBody });
    case CHAT_RESET_MESSAGE_BODY:
      return Object.assign({}, state, { messageBody: "" });
    case CHAT_CHANGE_ACTIVE_PANEL:
      return Object.assign({}, state, {
        activePanel: state.activePanel === "contacts" ? "chat" : "contacts",
      });
    default:
      return state;
  }
};
