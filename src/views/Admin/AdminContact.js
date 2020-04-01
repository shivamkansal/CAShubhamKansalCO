import React from "react";
import * as firebase from "firebase";
import { Link } from "react-router-dom";

import IndexNav from "../../components/navbar";
import Footer from "../../components/footer2";

import { Button } from "reactstrap";

export default class AdminContact extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("contactus");
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const boards = [];
    querySnapshot.forEach(doc => {
      const { name, email, phone, location, message } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        email,
        phone,
        location,
        message
      });
    });
    this.setState({
      boards
    });
  };

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        this.props.history.push("/login");
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render() {
    return (
      <>
        <IndexNav />
        <div style={{ paddingTop: "7%" }}>
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Contact Us Responses</h3>
                <Button color="info" to="/admin" tag={Link}>
                  Services Form Responses
                </Button>
                <Button color="info" to="/admin/careers" tag={Link}>
                  Careers Form Responses
                </Button>
              </div>
              <div class="panel-body">
                <table class="table table-stripe">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Location</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.boards.map(board => (
                      <tr>
                        <td>{board.name}</td>
                        <td>{board.email}</td>
                        <td>{board.phone}</td>
                        <td>{board.location}</td>
                        <td>{board.message}</td>
                        {/* <td>{board.desc}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Button color="success" onClick={this.handleLogout}>
              LOGOUT
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
