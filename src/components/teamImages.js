import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
configureAnchors({ offset: -100, scrollDuration: 100 });
function TeamImages() {
  return (
    <>
      <div style={{ textAlign: "center" }} className="section section-images">
        <ScrollableAnchor id={"coreteam"}>
          <div>
            <i className="fa fa-users fa-5x" />
          </div>
        </ScrollableAnchor>
        <Container>
          <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
            <div> CORE TEAM </div>
          </h2>
          <Row>
            <Col md="3">
              <div>
                <img
                  className="rounded"
                  alt="..."
                  src={require("../assets/img/Pooja.jpg")}
                />
                <h4 className="title" style={{ color: "#f96332" }}>
                  Full Name
                </h4>
                <p className="category text-info">Designation</p>
              </div>
            </Col>
            <Col md="3">
              <div>
                <img
                  className="rounded"
                  style={{ color: "#f96332" }}
                  alt="..."
                  src={require("../assets/img/Pooja.jpg")}
                />
                <h4 className="title" style={{ color: "#f96332" }}>
                  Full Name
                </h4>
                <p className="category text-info">Designation</p>
              </div>
            </Col>
            <Col md="3">
              <div>
                <img
                  className="rounded"
                  alt="..."
                  src={require("../assets/img/Pooja.jpg")}
                />
                <h4 className="title" style={{ color: "#f96332" }}>
                  Full Name
                </h4>
                <p className="category text-info">Designation</p>
              </div>
            </Col>
            <Col md="3">
              <div>
                <img
                  className="rounded"
                  alt="..."
                  src={require("../assets/img/Pooja.jpg")}
                />
                <h4 className="title" style={{ color: "#f96332" }}>
                  Full Name
                </h4>
                <p className="category text-info">Designation</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TeamImages;
