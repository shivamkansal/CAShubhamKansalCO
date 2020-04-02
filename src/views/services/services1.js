import React from "react";
import { Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

//components
import IndexNav2 from "../../components/navbar2";
import IndexHeader from "../../components/IndexHeader";

import Footer from "../../components/footer2";
import ContactForm from "../../components/form";
import Carousel from "../../components/carousel";
import MainPage from "./mainPage";

function Services1() {
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
              Accounting <span class="s-head2">Services</span>
            </h1>
            <p class="p-txt-ser">
              Accounting System Design & Implementation <br />
              Financial Accounting as per IGAAP, US GAAP and IFRS <br />
              Budgeting <br />
              Financial Reporting
              <br />
              MIS Reports <br />
              Financial Analysis
              <br />
              Asset Accounting Management
              <br />
              Depreciation and Amortization Schedules
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

export default Services1;
