import React from "react";
import firebase from "../components/Firebase";
import FileUploader from "react-firebase-file-uploader";

//components

import IndexNav2 from "../components/navbar2";

import Footer from "../components/footer2";

import Carousel from "../components/carousel";

import { Button } from "reactstrap";
import "../assets/css/sidebar.css"
// import ContactForm from "../components/form";

// htmlcodeimport export and render karna hai

export default class Careers extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("career");
    this.state = {
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      position: "",
      progress: 0,
      fileURL: "",
      resume: null,
      uploadSuccess: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      name,
      email,
      phone,
      location,
      message,
      position,
      fileURL
    } = this.state;

    this.ref
      .add({
        name,
        email,
        phone,
        location,
        position,
        message,
        fileURL
      })
      .then(docRef => {
        this.setState({
          name: "",
          phone: "",
          email: "",
          location: "",
          position: "",
          message: "",
          fileURL: ""
        });
        this.props.history.push("/contact");
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  handleChange = e => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      const resume = e.target.files[0];
      this.setState(() => ({ resume }));
    }
  };
  handleUpload = e => {
    e.preventDefault();

    const { resume } = this.state;
    const storageRef = firebase.storage().ref(`resumes/${resume.name}`);

    var URL = "";

    const uploadTask = storageRef.put(resume);

    uploadTask.on(
      "state_changed",
      snapshot => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({ progress });
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
          default:
        }
      },
      function(error) {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log("File available at", downloadURL);
          URL = downloadURL;
          this.setState({ fileURL: URL });
          this.setState({ uploadSuccess: true });
        });
      }
    );
  };

  render() {
    const { name, email, phone, location, position, message } = this.state;
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
                  Apply for Jobs at{" "}
                  <span class="s-ser"> Shubham Kansal &amp; Co</span>
                </h1>

                <p class="b-head-w1">
                  We nurture and cultivate a sense pride in the work and create
                  team leaders. Your growth chart will be governed by
                  well-defined and transparent policies of the firm. Apply via
                  the form below and meet us for a face-to-face interview
                </p>
              </div>

              <form
                id="contactus"
                class="contact-form"
                onSubmit={this.onSubmit}
              >
                <div class="row form-group" />

                <div class="row form-group">
                  <div class="col-md-6" style={{ textAlign: "right" }}>
                    <label class="">Position applying for:</label>

                    <select
                      name="position"
                      id="position"
                      required
                      onChange={this.onChange}
                      value={position}
                    >
                      <option value="ICAI Article Assistant">
                        ICAI Article Assistant
                      </option>

                      <option value="Semi Qualified CA">
                        Semi Qualified CA
                      </option>

                      <option value="Chartered Accountant">
                        Chartered Accountant
                      </option>

                      <option value="MBA/ Lawyer/ CS">MBA/ Lawyer/ CS</option>

                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div class="col-md-6">
                    <label class="">Location</label>

                    <select name="location" id="location" required>
                      <option value="New Delhi">New Delhi</option>

                      {/* <option value="Mumbai">Mumbai</option> */}
                    </select>

                    <p>&nbsp;</p>
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-3 car-blu-cen">
                    <label for="name" class="">
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
                      maxlength="50"
                      required
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

                  <div
                    class="col-md-12 car-blu-cen"
                    style={{ marginTop: "2%" }}
                  >
                    <label for="message" class="">
                      Why Shubham Kansal & Co.
                    </label>

                    <span id="contactus_message_errorloc" class="error" />

                    <textarea
                      rows="7"
                      cols="300"
                      name="message"
                      id="message"
                      required
                      onChange={this.onChange}
                      value={message}
                      class="input-text full-width"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="photo" class="">
                    Upload CV:
                  </label>
                  <input
                    type="file"
                    name="resume"
                    required
                    onChange={this.handleChange}
                  />
                  <Button
                    style={{ marginTop: "2%" }}
                    color="warning"
                    onClick={this.handleUpload}
                  >
                    UPLOAD
                  </Button>
                  {/* {this.state.uploadSuccess === true && ( */}
                  <div>Upload is {this.state.progress}% done.</div>
                </div>

                <div class="col-md-4" />
                <div class="short_explanation" style={{ marginLeft: "1005px" }}>
                  * required fields
                </div>

                <div class="col-md-1" style={{ textAlign: "center" }}>
                  <input
                    type="submit"
                    name="Submit"
                    value="SUBMIT"
                    class="btn-large btn-medium con-btn"
                    id="Submit"
                  />
                </div>
                {/* </div> */}
                {/* </div> */}
              </form>
            </div>
            <div class="row form-group">
              <div class="col-md-4" />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
