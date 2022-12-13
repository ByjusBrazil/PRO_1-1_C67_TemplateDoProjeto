import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
   
  apiKey: "AIzaSyCC4wK2-w62R___Y4wbBZRsAluly22-DM8",
  authDomain: "pro-67-14f39.firebaseapp.com",
  databaseURL: "https://pro-67-14f39-default-rtdb.firebaseio.com",
  projectId: "pro-67-14f39",
  storageBucket: "pro-67-14f39.appspot.com",
  messagingSenderId: "769039913797",
  appId: "1:769039913797:web:fad2053d30bd1f01baa42c"
};

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();