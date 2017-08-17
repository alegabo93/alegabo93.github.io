// Third-party dependencies
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import PropTypes from "prop-types";

// Own actions/constants/components
import routes from "../../routes";

class Root extends Component {
  static propTypes = {
    store: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render = () => {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router onUpdate={this.scrollTop()} history={history} routes={routes} />
      </Provider>
    );
  };
}

export default Root;
