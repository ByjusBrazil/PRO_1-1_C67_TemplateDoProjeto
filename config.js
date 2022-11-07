import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAZasSCxH4fUoaeBkTM9moDoVysMkIQdHk",
    authDomain: "proj58-ecf21.firebaseapp.com",
    databaseURL: "https://proj58-ecf21-default-rtdb.firebaseio.com",
    projectId: "proj58-ecf21",
    storageBucket: "proj58-ecf21.appspot.com",
    messagingSenderId: "731373645534",
    appId: "1:731373645534:web:58a1a099da13e34b2f1c4f",
    measurementId: "G-H7L6V96JC2"
  };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();