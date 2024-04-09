import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzYKb8AdxKh8XOyrSM9dLCVh6-QbNJEvc",
  authDomain: "tinder-clone-e85da.firebaseapp.com",
  databaseURL: "https://tinder-clone-e85da.firebaseio.com",
  projectId: "tinder-clone-e85da",
  storageBucket: "tinder-clone-e85da.appspot.com",
  messagingSenderId: "336610344448",
  appId: "1:336610344448:web:e905f67e8b5c259a29e2e5",
  measurementId: "G-GSWWK0R3RJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
