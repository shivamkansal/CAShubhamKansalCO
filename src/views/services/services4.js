import React from "react";
import { Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

//components
import IndexNav2 from "../../components/navbar2";
import Footer from "../../components/footer2";
import ContactForm from "../../components/form";
import Carousel from "../../components/carousel";
import MainPage from "./mainPage";

function Services4() {
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
              Payroll <span class="s-head2">Services</span>
            </h1>
            <p class="p-txt-ser">
              Preparation of Monthly Salary Sheet.
              <br />
              Deductions as per applicable laws like Income Tax, Provident Fund
              and Professional Tax etc.
              <br />
              Computation and deposit of TDS, ESI, PF etc.
              <br />
              Disbursement/ Online Payment of Salary.
              <br />
              Pay slip by e-mail.
              <br />
              Reimbursement of telephone, medical bills etc.
              <br />
              Issue of Form 16 to employees.
              <br />
              Periodic Reconciliation of payments/statutory deductions etc. with
              books of accounts.
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

export default Services4;
