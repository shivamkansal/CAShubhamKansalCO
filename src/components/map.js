import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";
import Iframe from "react-iframe";

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
      <div style={{ backgroundColor: "rgb(217,217,217)", paddingBottom: "2%" }}>
        <div
          className="container"
          style={{ textAlign: "center", paddingTop: "2%" }}
        >
          <i className="fa fa-map-marker fa-5x" />
          <h2 style={{ fontWeight: "bold", color: "#000" }}>LOCATE US</h2>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3501.9744037678906!2d77.27333181508257!3d28.63052923241853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3395fa3099%3A0xbc018a21c76e45ae!2sSHUBHAM%20KANSAL%20%26%20CO.!5e0!3m2!1sen!2sin!4v1587579252228!5m2!1sen!2sin"
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
