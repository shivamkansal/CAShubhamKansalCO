import React from "react";
import * as firebase from "firebase";
import { Link } from "react-router-dom";

import IndexNav from "../../components/navbar";
import Footer from "../../components/footer2";

import { Button } from "reactstrap";

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("formResponses");
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const boards = [];
    querySnapshot.forEach(doc => {
      const { name, email, phone, services, country, desc } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        email,
        phone,
        services,
        country,
        desc
      });
    });
    this.setState({
      boards
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

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
  render() {
    return (
      <>
        <IndexNav />
        <div style={{ paddingTop: "7%" }}>
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
                <Button align="right" color="danger" to="/" tag={Link}>
                  Only For Admins! Click Here To go Back!
                </Button>
                <h3 class="panel-title">FORM RESPONSES</h3>
                <Button color="info" to="/admin/careers" tag={Link}>
                  Career Form Responses
                </Button>
                <Button color="info" to="/admin/contact" tag={Link}>
                  Contact Us Responses
                </Button>
              </div>
              <div class="panel-body">
                <table class="table table-stripe">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Country</th>
                      <th>Services</th>
                      <th>Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.boards.map(board => (
                      <tr>
                        <td>{board.name}</td>
                        <td>{board.email}</td>
                        <td>{board.phone}</td>
                        <td>{board.country}</td>
                        <td>{board.services}</td>
                        <td>{board.desc}</td>
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
