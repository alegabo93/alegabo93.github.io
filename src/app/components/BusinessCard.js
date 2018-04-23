// Third-party dependencies
import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

// Own actions/constants/components
import TimeLine from "Components/TimeLine";

function BusinessCard(props) {
  const { title, classname, type, size, description, data } = props;
  const cardClass = classname ? `business-card ${classname}` : "business-card";

  return (
    <Row>
      <Col xs={12} md={size}>
        <div className={cardClass}>
          {title && <h1 className="title">{title}</h1>}
          {description && <p className="text-justify">{description}</p>}

          {type === "timeline" && data.length !== 0 && <TimeLine data={data} />}
        </div>
      </Col>
    </Row>
  );
}

BusinessCard.propTypes = {
  title: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BusinessCard;
