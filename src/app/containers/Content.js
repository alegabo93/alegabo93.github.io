// Third-party dependencies
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

// Own actions/constants/components
import BusinessCard from "Components/BusinessCard";

function Content({ business }) {
  return (
    <Row>
      <Col md={12}>
        {business.map(item => <BusinessCard key={item.title} {...item} />)}
      </Col>
    </Row>
  );
}

Content.propTypes = {
  business: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    business: state.business.data ? state.business.data : {}
  };
}

export default connect(mapStateToProps)(Content);
