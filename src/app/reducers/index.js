// Third-party dependencies
import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

// Own actions/constants/components
import user from "./User";
import presentation from "./PresentationData";
import business from "./BusinessData";

const rootReducer = combineReducers({
  routing,
  user,
  presentation,
  business
});

export default rootReducer;
