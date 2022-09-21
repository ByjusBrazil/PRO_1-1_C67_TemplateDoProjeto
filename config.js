import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAEMv8y-03xXAeEhPN-ndsu0pmEZSa3X0A",
    authDomain: "projeto-58-f4c86.firebaseapp.com",
    databaseURL: "https://projeto-58-f4c86-default-rtdb.firebaseio.com",
    projectId: "projeto-58-f4c86",
    storageBucket: "projeto-58-f4c86.appspot.com",
    messagingSenderId: "464507060644",
    appId: "1:464507060644:web:6f0952079b7a87a5e94131"
  };


// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();