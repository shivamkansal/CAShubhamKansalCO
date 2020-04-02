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

function Services9() {
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
              Goods & Service <span class="s-head2">Tax (GST)</span>
            </h1>
            <p class="p-txt-ser">
              Registration under GST
              <br />
              Consultancy for maintenance of proper records
              <br />
              Consultancy for proper accounting for GST
              <br />
              Consultancy on various issues relating to GST
              <br />
              Compilation of data for availment/utilization of Inputs credit
              <br />
              Assistance in availment of notified Abatements
              <br />
              Computation of GST payable
              <br />
              Preparation and filing Returns
              <br />
              Getting assessments Done
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

export default Services9;
