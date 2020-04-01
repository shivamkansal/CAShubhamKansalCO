import React from "react";
// import Carousel from "../../components/carousel";
import { Link } from "react-router-dom";
// import "../assets/css/sidebar.css";
import "..//../assets/css/sidebar.css"
//images
// import img1 from "../assets/img/statutory.jpg";
// import img2 from "../assets/img/management-and-internal-audit.jpg";
// import img3 from "../assets/img/ifrs.jpg";
// import img4 from "../assets/img/transaction.jpg";
// import img5 from "../assets/img/post.jpg";
// import img6 from "../assets/img/standard.jpg";

function MainPage() {
  return (
    <>
      <div
        class="sidebar"
        style={{
          marginTop: "2%",
          marginLeft: "2%",
          color: "#f96332"
        }}
      >
        <div class="travelo-box book-with-us-box">
          <h4 class="box-title o-ser" style={{ fontWeight: "bold" }}>
            OUR SERVICES
          </h4>
          <ul>
            <li>
              <h5 class="title">
                <Link
                  to="/services/Accounting-Services"
                  title="Accounting-Services"
                >
                  Accounting Services
                </Link>
              </h5>
            </li>
            <li>
              <h5 class="title">
                <Link to="/services/Auditing-&-Assurance-Services" title="">
                  Auditing and Assurance Services
                </Link>
              </h5>
            </li>
            <li>
              <h5 class="title">
                <Link
                  to="/services/Business-Process-Outsourcing-Services"
                  title=""
                >
                  Business Process Outsourcing Services
                </Link>
              </h5>
            </li>
            <li>
              <h5 class="title">
                <Link to="/services/Payroll" title="">
                  Payroll
                </Link>
              </h5>
            </li>
            <li>
              <h5 class="title">
                <Link
                  to="services/Income Tax"
                  title="Income Tax"
                  style={{ color: "white" }}
                >
                  Income Tax
                </Link>
              </h5>
            </li>
            <li>
              <h5 class="title">
                <Link
                  to="/services/Company-Law-Matters-Consultancy"
                  title="Company-Law-Matters-Consultancy"
                >
                  Company Law Matters Consultancy
                </Link>
              </h5>
            </li>
            <li>
              <h5 class="title">
                <Link
                  to="/services/Financial-Services"
                  title="Financial-Services"
                >
                  Financial Services
                </Link>
              </h5>
            </li>
            <li>
              <h5 class="title">
                <Link
                  to="/services/TIN-PAN-Facilitation"
                  title="TIN-PAN-Facilitation"
                >
                  TIN-PAN Facilitation
                </Link>
              </h5>
            </li>
            <li>
              <h5 class="title">
                <Link
                  to="/services/GST"
                  title="Goods-&-Service-Tax(GST)"
                >
                  Goods & Service Tax(GST)
                </Link>
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainPage;
