import { createStore, applyMiddleware, combineReducers, compose } from "redux";
//import thunk from "redux-thunk";
import { chatReducer } from "./reducers/chatReducer";
import { contentFeedsReducer } from "./reducers/contentFeedsReducer";
import { contentMusicReducer } from "./reducers/contentMusicReducer";
import { contentImagesReducer } from "./reducers/contentImagesReducer";
import { contentVideosReducer } from "./reducers/contentVideosReducer";
import { contentDocumentsReducer } from "./reducers/contentDocumentsReducer";
import { contentUsersReducer } from "./reducers/contentUsersReducer";
import { contentProfileReducer } from "./reducers/contentProfileReducer";
import { navReducer } from "./reducers/navReducer";

let reducers = combineReducers({
  chat: chatReducer,
  contentFeeds: contentFeedsReducer,
  contentMusic: contentMusicReducer,
  contentImages: contentImagesReducer,
  contentVideos: contentVideosReducer,
  contentDocuments: contentDocumentsReducer,
  contentUsers: contentUsersReducer,
  contentProfile: contentProfileReducer,
  nav: navReducer,
});

export const store = createStore(
  reducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
