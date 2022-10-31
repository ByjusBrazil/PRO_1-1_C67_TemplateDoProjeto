import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
        apiKey: "AIzaSyDmYtj5XvrjCs9pYUNGkDAciv-7gjqj1FE",
        authDomain: "projeto58-2605e.firebaseapp.com",
        databaseURL: "https://projeto58-2605e-default-rtdb.firebaseio.com",
        projectId: "projeto58-2605e",
        storageBucket: "projeto58-2605e.appspot.com",
        messagingSenderId: "432448307924",
        appId: "1:432448307924:web:e06a57636e244b0cb87141"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();