// Third-party dependencies
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

// Own actions/constants/components
import PersonalData from "Components/PersonalData";
import PresentationBlock from "Components/PresentationBlock";

function Sidebar({ profile, presentation }) {
  const { avatar_url: img, name, bio, login } = profile;
  return (
    <Row>
      <Col md={12}>
        <PersonalData img={img} name={name} occupation={bio} username={login} />
      </Col>

      <Col md={12}>
        {presentation.map(item => (
          <PresentationBlock key={item.title} {...item} />
        ))}
      </Col>
    </Row>
  );
}

Sidebar.propTypes = {
  presentation: PropTypes.arrayOf(PropTypes.object).isRequired,
  profile: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    login: PropTypes.string
  }).isRequired
};

function mapStateToProps(state) {
  return {
    profile: state.user.data ? state.user.data : {},
    presentation: state.presentation.data ? state.presentation.data : {}
  };
}

export default connect(mapStateToProps)(Sidebar);
