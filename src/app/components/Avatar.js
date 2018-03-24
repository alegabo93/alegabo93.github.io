// Third-party dependencies
import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Image } from "react-bootstrap";

function Avatar({ img, name, ocupation, username }) {
  return (
    <div className="avatar">
      <Row>
        <Col md={10} mdOffset={1}>
          <Image src={img} circle responsive />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2 className="text-center">{name}</h2>
          <h4 className="text-center">
            {ocupation}
            <br />
            <small>@{username}</small>
          </h4>
        </Col>
      </Row>
    </div>
  );
}

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ocupation: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default Avatar;
