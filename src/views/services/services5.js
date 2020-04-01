import React from "react";
import { Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

//components
import IndexNav2 from "../../components/navbar2";
import Footer from "../../components/footer2";
import ContactForm from "../../components/form";
import Carousel from "../../components/carousel";
import MainPage from "./mainPage";

function Services5() {
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
              Income <span class="s-head2">Tax</span>
            </h1>
            <p class="p-txt-ser">
              Consultancy on various intricate matters pertaining to Income tax.
              <br />
              Effective tax management, tax structuring and advisory services.
              <br />
              Tax Planning for Corporates and others.
              <br />
              Designing / restructuring salary structure to minimise tax burden.
              <br />
              Obtaining No Objection Certificates from Income tax department.
              <br />
              Obtaining PAN for assesses, employees etc.
              <br />
              Advance tax estimation and deposit.
              <br />
              Assessing the liability towards deferred taxes.
              <br />
              Providing regular updates on amendments, circulars, notifications
              & judgments.
              <br />
              Filing Income Tax returns for all kinds of assesses.
              <br />
              Filing Income tax returns for employees of corporate clients.
              <br />
              Liaison with Income tax department for rectification, assessment,
              obtaining refunds etc.
              <br />
              Expertise in direct tax assessments.
              <br />
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

export default Services5;
