import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Footer() {
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
                  href="/contact"
                  target="blank"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed & Coded by{" "}
            <a href="/" target="blank">
              Shubham Kansal & Co.
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
