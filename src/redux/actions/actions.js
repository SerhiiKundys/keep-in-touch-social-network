import {
  CHAT_ADD_NEW_MESSAGE,
  CHAT_CHANGE_MESSAGE_BODY,
  CHAT_RESET_MESSAGE_BODY,
  CHAT_CHANGE_ACTIVE_PANEL,
  USERS_CHANGE_FOLLOWING_USER,
  USERS_CHANGE_FIND_USER_BODY,
  USERS_RESET_FIND_USER_BODY,
  USERS_SET_USERS,
  USERS_SET_TOTAL_USERS_COUNT,
  USERS_SET_CURRENT_PAGE,
  USERS_SET_PAGE_COUNT,
  PROFILE_CHANGE_USER_ID,
} from "../types/types";

// Chat

export const addNewMessage = (message) => {
  return {
    type: CHAT_ADD_NEW_MESSAGE,
    message,
  };
};

export const changeMessageBody = (newBody) => {
  return {
    type: CHAT_CHANGE_MESSAGE_BODY,
    newBody,
  };
};

export const resetMessageBody = () => {
  return {
    type: CHAT_RESET_MESSAGE_BODY,
  };
};

export const changeActivePanel = () => {
  return {
    type: CHAT_CHANGE_ACTIVE_PANEL,
  };
};

// Users

export const changeFollowingUser = (userId) => {
  return {
    type: USERS_CHANGE_FOLLOWING_USER,
    userId,
  };
};

/* export const follow = (userId) => {
  return (dispatch) => {
    //dispatch(setFollowingInProgress(true, user.id));
    usersAPI.follow(user.id)
    .then(response => {
      if(response.data.resultCode == 0){
        dispatch(setFollowing(userId));
      }
      //dispatch(setFollowingInProgress(false, user.id));
    })
  }
} */

/* export const unfollow = (userId) => {
  return (dispatch) => {
    //dispatch(setFollowingInProgress(true, user.id));
    usersAPI.unfollow(user.id)
    .then(response => {
      if(response.data.resultCode == 0){
        dispatch(setUnfollowing(userId));
      }
      //dispatch(setFollowingInProgress(false, user.id));
    })
  }
} */

export const changeFindUsersBody = (newBody) => {
  return {
    type: USERS_CHANGE_FIND_USER_BODY,
    newBody,
  };
};

export const resetFindUsersBody = () => {
  return {
    type: USERS_RESET_FIND_USER_BODY,
  };
};

export const setUsers = (users) => {
  return {
    type: USERS_SET_USERS,
    users,
  };
};

export const setTotalUsersCount = (count) => {
  return {
    type: USERS_SET_TOTAL_USERS_COUNT,
    count,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: USERS_SET_CURRENT_PAGE,
    page,
  };
};

export const setPagesCount = (page) => {
  return {
    type: USERS_SET_PAGE_COUNT,
    page,
  };
};

// Profile

export const setProfileId = (id) => {
  return {
    type: PROFILE_CHANGE_USER_ID,
    id,
  };
};
