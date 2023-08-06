import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDpmjfifaDIeqo0uOC-P9M5mjaqyEN869s",
  authDomain: "team-voting-5e56b.firebaseapp.com",
  databaseURL: "https://team-voting-5e56b-default-rtdb.firebaseio.com",
  projectId: "team-voting-5e56b",
  storageBucket: "team-voting-5e56b.appspot.com",
  messagingSenderId: "675118006398",
  appId: "1:675118006398:web:31494d699d8fbb688d582f"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
