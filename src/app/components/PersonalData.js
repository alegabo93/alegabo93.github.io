// Third-party dependencies
import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Image } from "react-bootstrap";

function PersonalData({ img, name, occupation, username }) {
  return (
    <div className="personal-data">
      <Row>
        <Col md={10} mdOffset={1}>
          <Image src={img} circle responsive />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="info-block">
          <h2 className="name _text-center">{name}</h2>
          <h4 className="occupation _text-center">
            {occupation}
            <br />
            <small className="username">@{username}</small>
          </h4>
        </Col>
      </Row>
    </div>
  );
}

PersonalData.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default PersonalData;
