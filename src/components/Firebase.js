import * as firebase from "firebase";
// import firestore from "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyCtPZ9x0tmlChSon7yB6rCoCoBNZUs3lZM",
  authDomain: "steel-bliss-272217.firebaseapp.com",
  databaseURL: "https://steel-bliss-272217.firebaseio.com",
  projectId: "steel-bliss-272217",
  storageBucket: "steel-bliss-272217.appspot.com",
  messagingSenderId: "91127305508",
  appId: "1:91127305508:web:14719d30d98546851acfb1",
  measurementId: "G-2DS4FJVS3K"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
export const auth = firebase.auth();
export const functions = firebase.functions();
