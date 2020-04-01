import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";
// import Iframe from "react-iframe";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 28.63076,
      lng: 77.275542
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ backgroundColor: "gray", paddingBottom: "2%" }}>
        <div
          className="container"
          style={{ textAlign: "center", paddingTop: "2%" }}
        >
          <i className="fa fa-search-location fa-5x" />
          <h2 style={{ fontWeight: "bold", color: "#000" }}>LOCATE US</h2>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.973621323103!2d77.27336381492327!3d28.630552682418585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd931a153c63%3A0x39fd9f9fd4a4aa1c!2sCA%20SHUBHAM%20KANSAL%20%26%20CO.!5e0!3m2!1sen!2sin!4v1585085592105!5m2!1sen!2sin"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    );
  }
}

export default SimpleMap;
