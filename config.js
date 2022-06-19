import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBH8NfUyQNOPAnowsgOtR2cI9t8GdAt_U0",
    authDomain: "vote-9b7f5.firebaseapp.com",
    databaseURL: "https://vote-9b7f5-default-rtdb.firebaseio.com",
    projectId: "vote-9b7f5",
    storageBucket: "vote-9b7f5.appspot.com",
    messagingSenderId: "28251336981",
    appId: "1:28251336981:web:4231c3227dbc97a64c391c"
  };

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();