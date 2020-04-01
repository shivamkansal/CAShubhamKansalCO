import React from "react";
import { Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

//components
import IndexNav2 from "../../components/navbar2";
import Footer from "../../components/footer2";
import ContactForm from "../../components/form";
import Carousel from "../../components/carousel";
import MainPage from "./mainPage";

function Services3() {
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
              Business Process Outsourcing <span class="s-head2">Services</span>
            </h1>
            <p class="p-txt-ser">
              Benefits of Outsourcing:- <br />
              Enables business to concentrate on core business activities.
              <br />
              Use of manpower for more important functions
              <br />
              Investment in fixed assets reduced/minimized.
              <br />
              Substantial Savings in Cost.
              <br />
              Services of experts made available.
              <br />
              Improved Internal Controls.
              <br />
              Enhanced reporting capabilities to provide more timely and
              accurate financial data.
              <br />
              Off-site Backup of Data.
              <br />
              <br />
              Services:-
              <br />
              Our services are provided at market leading prices.
              <br />
              Book-keeping for clients.
              <br />
              Tax return for clients on quick book (in bulk & under guidance).
              <br />
              Pay roll processing.
              <br />
              Bank reconciliation statement.
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

export default Services3;
