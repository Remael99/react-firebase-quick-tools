import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpCBmefFZcfWDN--Xaj-GU1X4WgQTwGyM",
  authDomain: "react-saved-components.firebaseapp.com",
  projectId: "react-saved-components",
  storageBucket: "react-saved-components.appspot.com",
  messagingSenderId: "282324851959",
  appId: "1:282324851959:web:13cb1284919105461b47f2",
  measurementId: "G-3VM2X6VKL6",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();

export { storage, db, timeStamp, auth };
