import React from "react";
import { Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

//components
import IndexNav2 from "../../components/navbar2";
import Footer from "../../components/footer2";
import ContactForm from "../../components/form";
import IndexHeader from "../../components/IndexHeader";
import Carousel from "../../components/carousel";
import MainPage from "./mainPage";

function Services7() {
  return (
    <>
      <IndexNav2 />
      <IndexHeader />
      <Row>
        <Col md="3">
          <MainPage />
        </Col>

        <Col md="6">
          <div class="border-box" style={{ marginTop: "4.748%" }}>
            <h1 class="s-head1" title="Accounting-Services">
              Financial <span class="s-head2">Services</span>
            </h1>
            <p class="p-txt-ser">
              Preparations of Project Reports.
              <br />
              Preparation of CMA data for bank loans.
              <br />
              Loan arrangement- Cash credit limit, Term loan & Project loan
              <br />
              Valuation of shares.
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

export default Services7;
