import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBtviakTjVJ6qa_KDiliXxdT8aY7o7nJt8",
    authDomain: "team-voting-app-cc108.firebaseapp.com",
    databaseURL: "https://team-voting-app-cc108-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-cc108",
    storageBucket: "team-voting-app-cc108.appspot.com",
    messagingSenderId: "589626529103",
    appId: "1:589626529103:web:f449051d5a6c593f22613a"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.database();