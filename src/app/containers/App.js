// Third-party dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

// Own actions/constants/components
import Sidebar from "Containers/Sidebar";
import Content from "Containers/Content";
import Spinner from "Components/Spinner";
import getUserData from "Actions/User";

class App extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    hasData: PropTypes.bool.isRequired
  };

  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const { loading, hasData } = this.props;

    return (
      <Grid>
        <Row>
          <Col md={12}>
            {loading && <Spinner />}

            {!loading &&
              hasData && (
                <div className="flexbox-container">
                  <div className="sidebar">
                    <Col md={12}>
                      <Sidebar />
                    </Col>
                  </div>
                  <div className="content">
                    <Col md={12}>
                      <Content />
                    </Col>
                  </div>
                </div>
              )}
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.user.isFetching,
    hasData: state.user.data !== null
  };
}

export default connect(mapStateToProps, {
  getUsers: getUserData
})(App);
