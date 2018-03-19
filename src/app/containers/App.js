// Third-party dependencies
import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

// Own actions/constants/components
import PostsContainer from "./PostsContainer";

function App() {
  return (
    <Grid>
      <Row>
        <Col md={12}>
          <div className="flexbox-container">
            <div className="sidebar">
              <p>hola mundo</p>
            </div>
            <div className="content">
              <PostsContainer />
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
