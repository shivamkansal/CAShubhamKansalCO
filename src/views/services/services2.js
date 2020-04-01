import React from "react";
import { Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

//components
import IndexNav2 from "../../components/navbar2";
import Footer from "../../components/footer2";
import ContactForm from "../../components/form";
import Carousel from "../../components/carousel";
import MainPage from "./mainPage";

function Services2() {
  return (
    <>
      <IndexNav2 />
      <div className="page-header clear-filter" filter-color="blue">
        <Carousel className="page-header-image" />
      </div>
      <Row>
        <Col md="3">
          <MainPage />
        </Col>

        <Col md="6">
          <div class="border-box" style={{ marginTop: "4.748%" }}>
            <h1 class="s-head1" title="Accounting-Services">
              Auditing & Assurance <span class="s-head2">Services</span>
            </h1>
            <p class="p-txt-ser">
              We are blessed with team of qualified chartered accountants highly
              efficient in auditing and assurance services. Our wide range of
              services are aimed for financial stability of the clients and take
              care of the decision making abilities. The services we provide are
              in comply with the legal environment.
              <br />
              <br />
              Statutory audit <br />
              Internal audit <br />
              System & management audit <br />
              Concurrent and Income & Expenditure audit <br />
              Bank audit <br />
              Stock audit <br />
              Due diligence
              <br />
              Certification work
              <br />
            </p>
          </div>
        </Col>
        <Col md="3">
          <ContactForm />
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default Services2;
