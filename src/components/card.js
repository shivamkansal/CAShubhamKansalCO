import React from "react";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

// reactstrap components
import { Card, CardBody, CardText, CardFooter } from "reactstrap";

// import "../assets/css/fontstyle.css";

configureAnchors({ offset: -90, scrollDuration: 100 });

function CardComponent() {
  const cardStyle = {
    marginTop: "10px",
    backgroundColor: "#4262B2",
    color: "#fff"
  };

  return (
    <>
      <Card className="text-center" style={cardStyle}>
        {/* <CardHeader className="mt-2">ABOUT US</CardHeader> */}
        <CardBody>
          <ScrollableAnchor id={"aboutus"}>
            <div>
              <i class="fa fa-user fa-4x" aria-hidden="true" />
            </div>
          </ScrollableAnchor>
          <h2 style={{ color: "#fff", fontWeight: "bold" }}>ABOUT US</h2>
          <CardText>
            <p style={{ textAlign: "justify" , fontWeight: "bold" }} id="body">
              Shubham Kansal & Co. established in 2018 is a services firm that acts as the single-point contact for solutions 
              to complex Indian laws, regulations and taxation matters in a seamless, end to end manner with in-house Chartered Accountants, 
              Lawyers, MBAs and Company Secretaries.
              We are one of the famous chartered accountants firms in
              India and are engaged in providing chartered accounting services,
              financial and consultancy services, auditing services either
              internal auditing, management auditing or statutory auditing
              services, business process outsourcing services, income tax
              services, TIN- PAN related services, Goods & Service Tax and
              Payroll services. With years of rich experience and credibility to
              back up, shubham kansal & co. has always been 
              able to meet the
              client's specific requirement.
            </p>
          </CardText>
        </CardBody>
        <CardFooter className="mb-2" style={{ fontSize: "120%" }}>
          www.shubhamkansal&co.com | (+91)9810055653 | shubhamkansalcompany@gmail.com 
        </CardFooter>
      </Card>
      
    </>
  );
}

export default CardComponent;
