import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDC__VSypinBF9lBle7sYzBaZG6_MYrVZQ",
  authDomain: "projeto67-342b0.firebaseapp.com",
  projectId: "projeto67-342b0",
  storageBucket: "projeto67-342b0.appspot.com",
  messagingSenderId: "102452380856",
  appId: "1:102452380856:web:ae92a62943efa3c84fa04d",
  measurementId: "G-M1F0JSBZVV"
};
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
