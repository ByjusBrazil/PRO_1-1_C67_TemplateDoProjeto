import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC0UwoJ0k4SpUucKMdVI_XK-P5egc5yFdE",
    authDomain: "projeto-67-ebddb.firebaseapp.com",
    databaseURL: "https://projeto-67-ebddb-default-rtdb.firebaseio.com",
    projectId: "projeto-67-ebddb",
    storageBucket: "projeto-67-ebddb.appspot.com",
    messagingSenderId: "411687152581",
    appId: "1:411687152581:web:d02e4dc523a8a38c5539ac",
    measurementId: "G-64FWGKPSLL"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();