let initialState = {};

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHAT/ADD_NEW_MESSAGE":
      return Object.assign({}, state, { messages: action.payload });
    case "CHAT/CHANGE_MESSAGE_BODY":
      return Object.assign({}, state, { messageBody: action.payload });
    default:
      return state;
  }
};
