// Third-party dependencies
import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

function TimeLine({ data }) {
  return (
    <Row className="time-line">
      <Col xs={12}>
        {data.map((item, index) => {
          const { year, title, subtitle, detail } = item;
          const key = `${item.title}${index}`;

          return (
            <Row key={key} className="time-event">
              <Col md={3} className="line">
                <span className="year">{year}</span>
              </Col>
              <Col md={9} className="content">
                <h4 className="title">
                  {title}
                  <br />
                  <small className="subtitle">{subtitle}</small>
                </h4>
                <p className="detail">{detail}</p>
              </Col>
            </Row>
          );
        })}
      </Col>
    </Row>
  );
}

TimeLine.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      detail: PropTypes.string
    })
  ).isRequired
};

export default TimeLine;
