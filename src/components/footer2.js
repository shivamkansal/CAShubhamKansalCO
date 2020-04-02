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
                  href="/"
                  target="blank"
                >
                  CA Shubham Kansal & Co.
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/"
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
              Shubham Kansal & Co.
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer2;
