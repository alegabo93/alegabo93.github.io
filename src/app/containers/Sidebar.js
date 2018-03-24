// Third-party dependencies
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

// Own actions/constants/components
import Avatar from "Components/Avatar";

function Sidebar({ profile }) {
  const { avatar_url: img, name, bio, login } = profile;
  return (
    <Col md={12}>
      <Avatar img={img} name={name} ocupation={bio} username={login} />
    </Col>
  );
}

Sidebar.propTypes = {
  profile: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    login: PropTypes.string
  }).isRequired
};

function mapStateToProps(state) {
  return {
    profile: state.user.data ? state.user.data : {}
  };
}

export default connect(mapStateToProps)(Sidebar);
