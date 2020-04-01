import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Footer2() {
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=nukr-default-footer"
                  target="blank"
                >
                  CA Shubham Kansal & Co.
                </a>
              </li>
              <li>
                <a
                  href="http://presentation.creative-tim.com?ref=nukr-default-footer"
                  target="blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nukr-default-footer"
                  target="blank"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed & Coded by{" "}
            <a href="www.google.com" target="blank">
              PLACE VALUE
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer2;
