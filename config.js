import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBiQAnSU3VdXXyUgV9p07ZukTx2GZAJowM",
  authDomain: "teamvotingapp-9eade.firebaseapp.com",
  databaseURL: "https://teamvotingapp-9eade-default-rtdb.firebaseio.com",
  projectId: "teamvotingapp-9eade",
  storageBucket: "teamvotingapp-9eade.appspot.com",
  messagingSenderId: "577889306954",
  appId: "1:577889306954:web:044131df53059cf7bc99b3",
  measurementId: "G-FM3R9J1RSY"

};
// Initialice o Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase.database();