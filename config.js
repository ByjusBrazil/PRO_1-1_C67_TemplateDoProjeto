import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC6_RlNaPa6rFuWrjAQn3XxSVqfWZfERao",
    authDomain: "sla-mais.firebaseapp.com",
    databaseURL: "https://sla-mais-default-rtdb.firebaseio.com",
    projectId: "sla-mais",
    storageBucket: "sla-mais.appspot.com",
    messagingSenderId: "61502619355",
    appId: "1:61502619355:web:fa3489dca9ad02175296fe"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.database();