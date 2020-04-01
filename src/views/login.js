import React, { useState, useContext } from "react";
import { AuthContext } from "../App";
import * as firebase from "firebase";
import { withRouter } from "react-router-dom";

//components
import IndexNav from "../components/navbar2";
import Footer from "../components/footer2";

const Login = ({ history }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setErrors] = React.useState("");

  const Auth = React.useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(res => {
            if (res.user) Auth.setLoggedIn(true);
            history.push("/admin");
          })
          .catch(e => {
            setErrors(e.message);
          });
      });
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            console.log(result);
            history.push("/admin");
            Auth.setLoggedIn(true);
          })
          .catch(e => setErrors(e.message));
      });
  };
  return (
    <>
      <IndexNav />
      <div style={{ paddingTop: "7%", textAlign: "center" }}>
        <h1>Login</h1>
        <form onSubmit={e => handleForm(e)}>
          <hr />
          <button
            onClick={() => signInWithGoogle()}
            className="googleBtn"
            type="button"
          >
            
            GOOGLE
          </button>
          <span>{error}</span>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(Login);
