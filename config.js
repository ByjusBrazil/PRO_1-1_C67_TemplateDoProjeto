import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
        apiKey: "AIzaSyAv563Yzg8AzUoK6ttmabxb5LaK_kaqbfQ",
        authDomain: "projetoc67.firebaseapp.com",
        databaseURL: "https://projetoc67-default-rtdb.firebaseio.com",
        projectId: "projetoc67",
        storageBucket: "projetoc67.appspot.com",
        messagingSenderId: "160196978297",
        appId: "1:160196978297:web:b322846d6df1fe718996a8"
      };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();