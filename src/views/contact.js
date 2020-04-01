import React from "react";
import firebase from "../components/Firebase";

//components
import IndexNav2 from "../components/navbar2";
import Footer from "../components/footer2";
import Carousel from "../components/carousel";
// import ContactForm from "../components/form";
import "../assets/css/sidebar.css"
// htmlcodeimport export and render karna hai
export default class Contact extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("contactus");
    this.state = {
      name: "",
      email: "",
      phone: "",
      location: "",
      message: ""
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, phone, location, message } = this.state;

    this.ref
      .add({
        name,
        email,
        phone,
        location,
        message
      })
      .then(docRef => {
        this.setState({
          name: "",
          phone: "",
          email: "",
          location: "",
          message: ""
        });
        this.props.history.push("/");
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };
  render() {
    const { name, email, phone, location, message } = this.state;
    return (
      <>
        <IndexNav2 />
        <div className="page-header clear-filter" filter-color="blue">
          <Carousel className="page-header-image" />
        </div>
        <div class="container">
          <div id="main">
            <div class="ggala1">
              <div class="intro text-center block">
                <h1 class="s-our" title="Apply for Jobs at SP Chopra &amp; Co">
                  ENQUIRY
                  <span class="s-ser"> FORM </span>
                </h1>
                <p class="b-head-w1">
                  Our service philosophy draws from our desire to build story
                  being term partnerships with our clients. In every assignment,
                  It is our Endeavour that the service represents a significant
                  value add proposition for directs. Contact us today to learn
                  how we can assist you.
                </p>
              </div>
              <form
                id="contactus"
                class="contact-form"
                onSubmit={this.onSubmit}
              >
                <div class="row form-group" />
                <div class="row form-group">
                  <div class="col-md-3 car-blu-cen">
                    <label for="name" class="" >
                      Your Full Name*:{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      maxlength="50"
                      required
                      class="input-text full-width"
                      onChange={this.onChange}
                      value={name}
                      style={{ marginBottom: "10px" }}
                    />
                    <span id="contactus_name_errorloc" class="error" />
                  </div>

                  <div class="col-md-3 car-blu-cen">
                    <label for="email" class="">
                      Email Address*:
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      maxlength="50"
                      class="input-text full-width"
                      onChange={this.onChange}
                      value={email}
                      style={{ marginBottom: "10px" }}
                    />
                    <span id="contactus_email_errorloc" class="error" />
                  </div>

                  <div class="col-md-3 car-blu-cen">
                    <label class="">Your Phone</label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      required
                      class="input-text full-width"
                      onChange={this.onChange}
                      value={phone}
                      style={{ marginBottom: "10px" }}
                    />
                    <span id="contactus_phone1_errorloc" class="error" />
                  </div>

                  <div class="col-md-3 car-blu-cen">
                    <label class="car-blu-cen">Location</label>
                    <input
                      type="text"
                      id="location1"
                      name="location"
                      required
                      class="input-text full-width"
                      onChange={this.onChange}
                      value={location}
                      style={{ marginBottom: "10px" }}
                    />
                  </div>

                  <div class="col-md-12 car-blu-cen">
                    <label for="message" class="">
                      Message
                    </label>
                    <span id="contactus_message_errorloc" class="error" />
                    <textarea
                      rows="7"
                      cols="300"
                      name="message"
                      id="message"
                      required
                      class="input-text full-width"
                      onChange={this.onChange}
                      value={message}
                    />
                  </div>
                </div>

                <div class="col-md-4" />
                <div class="col-md-4" />
                <div class="short_explanation" style={{ marginLeft: "1005px" }}>
                  * required fields
                </div>
                {/* </div> */}
                <div class="col-md-1" style={{ textAlign: "center" }}>
                  <input
                    type="submit"
                    name="Submit"
                    value="SUBMIT"
                    class="btn-large btn-medium con-btn"
                    id="Submit"
                  />
                </div>
              </form>
            </div>
            <div class="row form-group">
              <div class="col-md-4" />
            </div>
          </div>
        </div>
        {/* </div> */}
        <Footer />
      </>
    );
  }
}
