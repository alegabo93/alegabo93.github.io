// Third-party dependencies
import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

// Own actions/constants/components
import user from "./User";

const rootReducer = combineReducers({
  routing,
  user
});

export default rootReducer;
