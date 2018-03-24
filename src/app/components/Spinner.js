// Third-party dependencies
import React from "react";
import { Row, Col } from "react-bootstrap";
import { BounceLoader } from "react-spinners";

function Spinner() {
  const style = {
    wrapper: {
      margin: "200px 0"
    },
    spinner: {
      margin: "0 auto",
      display: "inline-block"
    }
  };

  return (
    <Row>
      <Col md={12} className="text-center" style={style.wrapper}>
        <div style={style.spinner}>
          <BounceLoader size={80} color="#39c" loading />
        </div>
      </Col>
    </Row>
  );
}

export default Spinner;
