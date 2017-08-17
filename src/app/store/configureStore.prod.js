// Third-party dependencies
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// Own actions/constants/components
import rootReducer from "@/reducers/index";

const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, applyMiddleware(promise(), thunk));

export default configureStore;
