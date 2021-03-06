import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk4GEeonvwppp_P3dqs6zdEcJVvYOldbk",
  authDomain: "majorprojectfeed.firebaseapp.com",
  projectId: "majorprojectfeed",
  storageBucket: "majorprojectfeed.appspot.com",
  messagingSenderId: "394759428028",
  appId: "1:394759428028:web:1e15d69688017a084fbdb9",
  measurementId: "G-47T7LSYGSD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
