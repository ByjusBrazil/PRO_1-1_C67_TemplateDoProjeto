import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBcf3UziCVEEnnb3A74SlvsiKVwqcXdGic",
    authDomain: "projeto-58-e811d.firebaseapp.com",
    databaseURL: "https://projeto-58-e811d-default-rtdb.firebaseio.com",
    projectId: "projeto-58-e811d",
    storageBucket: "projeto-58-e811d.appspot.com",
    messagingSenderId: "214856494288",
    appId: "1:214856494288:web:631be52a04ab73e7e302d5"

};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();