import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBNxeK6rjY7LPS7KvILsCv5NIBBRpUml0",
  authDomain: "clone-2065b.firebaseapp.com",
  databaseURL: "https://clone-2065b.firebaseio.com",
  projectId: "clone-2065b",
  storageBucket: "clone-2065b.appspot.com",
  messagingSenderId: "193107603042",
  appId: "1:193107603042:web:4b98bad674e643b3162b3b",
  measurementId: "G-ZBF67QH8HE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
