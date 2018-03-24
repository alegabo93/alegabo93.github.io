// Third-party dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

// Own actions/constants/components
import Sidebar from "Containers/Sidebar";
import getUserData from "Actions/User";

class App extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <div className="flexbox-container">
              <div className="sidebar">
                <Col md={12}>
                  <Sidebar />
                </Col>
              </div>
              <div className="content">
                <h1>Hola Mundo</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(null, {
  getUsers: getUserData
})(App);
