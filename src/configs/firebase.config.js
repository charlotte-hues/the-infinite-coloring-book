import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2gRE7qjodVNT5PLBwyFW20-Ok2wmBQLA",
  authDomain: "the-infinite-coloring-book.firebaseapp.com",
  databaseURL: "https://the-infinite-coloring-book.firebaseio.com",
  projectId: "the-infinite-coloring-book",
  storageBucket: "the-infinite-coloring-book.appspot.com",
  messagingSenderId: "826847385754",
  appId: "1:826847385754:web:d7b259315b2d1e9949a723",
  measurementId: "G-WF06X0NVS2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
