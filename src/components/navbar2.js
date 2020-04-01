import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAddressCard,  } from '@fortawesome/free-solid-svg-icons'

function IndexNav2() {
  const [navbarColor, setNavbarColor] = useState("fixed-top bg-white");
  const [collapseOpen, setCollapseOpen] = useState(false);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("fixed-top");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("fixed-top bg-white");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={navbarColor}
        expand="lg"
        color="primary"
        style={{ height: "13%" }}
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              to="/"
              tag={Link}
              id="navbar-brand"
              style={{ fontSize: "150%", color: "#000" }}
            >
              CA Shubham Kansal & Co.
            </NavbarBrand>
            {/* <UncontrolledTooltip target="#navbar-brand" /> */}
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar" />
              <span className="navbar-toggler-bar middle-bar" />
              <span className="navbar-toggler-bar bottom-bar" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar style={{ fontSize: "140%" }}>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  style={{ color: "#000" }}
                  href=""
                  nav
                  onClick={e => e.preventDefault()}
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93" /> */}
                  <i style={{ paddingRight: "7px" }} className="fa fa-user" />
                  <p>ABOUT US</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/" tag={Link}>
                    Who are We?
                  </DropdownItem>
                  <DropdownItem to="/" tag={Link}>
                    Core Team
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  style={{ color: "#000" }}
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i
                    style={{ paddingRight: "7px" }}
                    className="fa fa-briefcase"
                  />
                  <p>SERVICES</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/services/Accounting-Services" tag={Link}>
                    Accounting Services
                  </DropdownItem>
                  <DropdownItem
                    to="/services/Auditing-&-Assurance-Services"
                    tag={Link}
                  >
                    Auditing and Assurance Services
                  </DropdownItem>
                  <DropdownItem
                    to="/services/Business-Process-Outsourcing-Services"
                    tag={Link}
                  >
                    Business Process Outsourcing Services
                  </DropdownItem>
                  <DropdownItem to="/services/Payroll" tag={Link}>
                    Payroll
                  </DropdownItem>
                  <DropdownItem to="/services/Income Tax" tag={Link}>
                    Income Tax
                  </DropdownItem>
                  <DropdownItem
                    to="/services/Company-Law-Matters-Consultancy"
                    tag={Link}
                  >
                    Company Law Matters Consultancy
                  </DropdownItem>
                  <DropdownItem to="/services/Financial-Services" tag={Link}>
                    Financial Services
                  </DropdownItem>
                  <DropdownItem to="/services/TIN-PAN-Facilitation" tag={Link}>
                    TIN-PAN Facilitation
                  </DropdownItem>
                  <DropdownItem
                    to="/services/GST"
                    tag={Link}
                  >
                    Goods & Service Tax(GST)
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i
                    style={{ paddingRight: "7px" }}
                    className="fa fa-question-circle"
                  />
                  <p>FAQ's</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/" tag={Link}>
                    SOON
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    Soon
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}

              <NavItem>
                <NavLink to="/careers" tag={Link} style={{ color: "#000" }}>
                  <i
                    style={{ paddingRight: "7px" }}
                    className="fa fa-user-plus"
                  />
                  <p>Careers</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" tag={Link} style={{ color: "#000" }}>
                  <i
                    style={{ paddingRight: "7px" }}
                    className="fa fa-user-plus"
                  />
                  <p>Contact Us</p>
                </NavLink>
              </NavItem>

              {/* <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="#pablo"
                  id="upgrade-to-pro"
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1" />
                  <p>Login!</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  For Services!
                </UncontrolledTooltip>
              </NavItem> */}
              <NavItem>
                <NavLink
                  href="https://twitter.com/"
                  target="_blank"
                  id="twitter-tooltip"
                  style={{ color: "#000" }}
                >
                  <i className="fab fa-twitter" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  id="facebook-tooltip"
                  style={{ color: "#000" }}
                >
                  <i className="fab fa-facebook" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/"
                  target="_blank"
                  id="instagram-tooltip"
                  style={{ color: "#000" }}
                >
                  <i className="fab fa-instagram" />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNav2;
