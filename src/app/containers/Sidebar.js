// Third-party dependencies
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col, Image } from "react-bootstrap";

function Sidebar({ profile }) {
  const { avatar_url: avatar, name } = profile;
  return (
    <Col md={12}>
      <Row>
        <Col md={12}>
          <Image src={avatar} circle responsive />
          <h3 className="text-center">{name}</h3>
        </Col>
      </Row>
    </Col>
  );
}

Sidebar.propTypes = {
  profile: PropTypes.shape({
    avatar_url: PropTypes.string
  }).isRequired
};

function mapStateToProps(state) {
  return {
    profile: state.user.data ? state.user.data : {}
  };
}

export default connect(mapStateToProps)(Sidebar);
