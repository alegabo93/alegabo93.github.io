import "babel-polyfill";

// Third-party dependencies
import React from "react";
import axios from "axios";
import { render } from "react-dom";
import { syncHistoryWithStore } from "react-router-redux";
import { useRouterHistory } from "react-router";
import { createHashHistory } from "history";

// Own actions/constants/components
import Root from "Containers/Root";
import configureStore from "@/store/configureStore";
import defaultApiUrl from "@/constants/Constants";

// Set Axios defaults
axios.defaults.baseURL = defaultApiUrl;
axios.defaults.headers.post["Content-Type"] = "application/json";

const store = configureStore();
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const history = syncHistoryWithStore(appHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById("root")
);
