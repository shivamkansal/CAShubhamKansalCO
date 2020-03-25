import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function TeamImages() {
  return (
    <>
      <div style={{ textAlign: "center" }} className="section section-images">
        <i className="fa fa-users fa-4x" />
        <Container>
          <h3 style={{ textAlign: "center" }}>CORE TEAM</h3>
          <Row>
            <Col md="3">
              <div>
                <img
                  className="rounded"
                  alt="..."
                  src={require("../assets/img/julie.jpg")}
                />
                <p className="category">Full Name</p>
              </div>
            </Col>
            <Col md="3">
              <div>
                <img
                  className="rounded"
                  alt="..."
                  src={require("../assets/img/julie.jpg")}
                />
                <p className="category">Full Name</p>
              </div>
            </Col>
            <Col md="3">
              <div>
                <img
                  className="rounded"
                  alt="..."
                  src={require("../assets/img/julie.jpg")}
                />
                <p className="category">Full Name</p>
              </div>
            </Col>
            <Col md="3">
              <div>
                <img
                  className="rounded"
                  alt="..."
                  src={require("../assets/img/julie.jpg")}
                />
                <p className="category">Full Name</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TeamImages;
