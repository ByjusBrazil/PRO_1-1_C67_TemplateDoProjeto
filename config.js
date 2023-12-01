import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCyfTlBrk9ra84UbndSwUR7bQuF-dfQytU",
    authDomain: "pro-67-d57cd.firebaseapp.com",
    databaseURL: "https://pro-67-d57cd-default-rtdb.firebaseio.com",
    projectId: "pro-67-d57cd",
    storageBucket: "pro-67-d57cd.appspot.com",
    messagingSenderId: "175811672507",
    appId: "1:175811672507:web:e308cac1e2ccb33db16c9e"
  };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();