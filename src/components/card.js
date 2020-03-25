import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button
} from "reactstrap";
// core components

function CardComponent() {
  const cardStyle = {
    marginTop: "10px",
    backgroundColor: "#2ca8ff",
    color: "#fff"
  };

  return (
    <>
      <Card className="text-center" style={cardStyle}>
        {/* <CardHeader className="mt-2">ABOUT US</CardHeader> */}
        <CardBody>
          <CardTitle tag="h4">ABOUT US</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardBody>
        {/* <CardFooter className="text-muted mb-2">2 days ago</CardFooter> */}
      </Card>
    </>
  );
}

export default CardComponent;
