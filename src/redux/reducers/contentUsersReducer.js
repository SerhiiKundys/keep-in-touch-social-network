import {
  USERS_CHANGE_FOLLOWING_USER,
  USERS_CHANGE_FIND_USER_BODY,
  USERS_RESET_FIND_USER_BODY,
  USERS_SET_USERS,
  USERS_SET_TOTAL_USERS_COUNT,
  USERS_SET_CURRENT_PAGE,
  USERS_SET_PAGE_COUNT,
} from "../types/types";

// THIS IS ONLY IMITATION OF DB! ----------------
// THERE ARE HARDCODED USERS! -------------------
// THIS WILL BE DELETED IN RELEASE! -------------
export const UsersDb = {
  users: [
    {
      destination: "TEST",
      username: "Jack",
      location: {
        country: "USA",
        city: "Miami",
      },
      id: 1,
      followed: false,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU",
    },
    {
      destination: "TEST",
      username: "Nick",
      location: {
        country: "Ukraine",
        city: "Lviv",
      },
      id: 2,
      followed: true,
      img: null,
    },
    {
      destination: "TEST",
      username: "John",
      location: {
        country: "USA",
        city: "Los-Angeles",
      },
      id: 3,
      followed: false,
      img: null,
    },
    {
      destination: "TEST",
      username: "Steve",
      location: {
        country: "France",
        city: "Paris",
      },
      id: 4,
      followed: true,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU",
    },
    {
      destination: "TEST",
      username: "Mike",
      location: {
        country: "Spain",
        city: "Madrid",
      },
      id: 5,
      followed: false,
      img: null,
    },
    {
      destination: "TEST",
      username: "Luke",
      location: {
        country: "Ukraine",
        city: "Kyiv",
      },
      id: 6,
      followed: true,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU",
    },
    {
      destination: "TEST",
      username: "Jeff",
      location: {
        country: "Italy",
        city: "Milan",
      },
      id: 7,
      followed: false,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU",
    },
    {
      destination: "TEST",
      username: "Dean",
      location: {
        country: "USA",
        city: "New York",
      },
      id: 8,
      followed: false,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU",
    },
    {
      destination: "TEST",
      username: "Oleh",
      location: {
        country: "Ukraine",
        city: "Lviv",
      },
      id: 9,
      followed: true,
      img: null,
    },
    {
      destination: "TEST",
      username: "James",
      location: {
        country: "USA",
        city: "Chicago",
      },
      id: 10,
      followed: false,
      img: null,
    },
    {
      destination: "TEST",
      username: "Chris",
      location: {
        country: "Canada",
        city: "Toronto",
      },
      id: 11,
      followed: false,
      img: null,
    },
  ],
  totalUsersCount: 11,
};
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

const initialState = {
  users: [],
  findUsersBody: "",
  currentPage: 1,
  totalUsersCount: null,
  pagesCount: null,
  numPerPage: 4,
};

export const contentUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_CHANGE_FOLLOWING_USER:
      return Object.assign({}, state, {
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          } else {
            return user;
          }
        }),
      });
    case USERS_CHANGE_FIND_USER_BODY:
      return Object.assign({}, state, { findUsersBody: action.newBody });
    case USERS_SET_USERS:
      return Object.assign({}, state, { users: action.users });
    case USERS_SET_TOTAL_USERS_COUNT:
      return Object.assign({}, state, { totalUsersCount: action.count });
    case USERS_SET_CURRENT_PAGE:
      return Object.assign({}, state, { currentPage: action.page });
    case USERS_SET_PAGE_COUNT:
      return Object.assign({}, state, { pagesCount: action.count });
    case USERS_RESET_FIND_USER_BODY:
      return Object.assign({}, state, { findUsersBody: "" });
    default:
      return state;
  }
};
