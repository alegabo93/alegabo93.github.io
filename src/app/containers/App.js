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
          <PostsContainer />
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
