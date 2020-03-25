/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import Carousel from "./carousel";

function IndexHeader() {
  let pageHeader = React.createRef();

  // React.useEffect(() => {
  //   if (window.innerWidth > 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <Carousel className="page-header-image" />
        {/* <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        /> */}
        {/* <Container>
      
        </Container> */}
      </div>
    </>
  );
}

export default IndexHeader;
