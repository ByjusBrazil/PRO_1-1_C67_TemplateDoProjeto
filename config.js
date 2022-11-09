import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD3S9YjKSAEy7fFqt5DiTo5Lmu0YJetBQY",
    authDomain: "team-voting-48710.firebaseapp.com",
    databaseURL: "https://team-voting-48710-default-rtdb.firebaseio.com",
    projectId: "team-voting-48710",
    storageBucket: "team-voting-48710.appspot.com",
    messagingSenderId: "1077424417570",
    appId: "1:1077424417570:web:2f41022cefa8d8adbc537b",
    measurementId: "G-1QWVT6GFMQ"
  };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();