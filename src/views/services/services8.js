import React from "react";
import { Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

//components
import IndexNav2 from "../../components/navbar2";
import Footer from "../../components/footer2";
import ContactForm from "../../components/form";
import Carousel from "../../components/carousel";
import MainPage from "./mainPage";

function Services8() {
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
              TIN-PAN <span class="s-head2">Facilitation</span>
            </h1>
            <p class="p-txt-ser">
              TIN
              <br />
              PAN
              <br />
              E-TDS Return
              <br />
              Annual Information Return
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

export default Services8;
