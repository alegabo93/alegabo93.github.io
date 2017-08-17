// Third-party dependencies
import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

// Own actions/constants/components
import posts from "./Posts";

const rootReducer = combineReducers({
  routing,
  posts
});

export default rootReducer;
