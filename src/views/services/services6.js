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

function Services6() {
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
              Company Law Matters <span class="s-head2">Consultancy</span>
            </h1>
            <p class="p-txt-ser">
              Every company according to the India law need to register with the
              registrar of companies and it is also necessary with documents for
              various statutory requirements. Our wide range of products include
              the followings:- Formation of company in India, viz, Private
              Limited, Public Limited.
              <br />
              <br />
              Services:-
              <br />
              All matters related with Registrar of Companies & Company Law
              Board.
              <br />
              Maintenance & compliance of Statutory Records.
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

export default Services6;
