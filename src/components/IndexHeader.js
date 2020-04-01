/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import Carousel from "./carousel";

function IndexHeader() {
  let pageHeader = React.createRef();
  return (
    <>
      <Carousel className="page-header" />
    </>
  );
}

export default IndexHeader;
