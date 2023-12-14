import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCpT5fF4p4rSQ2oJnJGJuIRR4hYblD9aGI",
    authDomain: "projeto-67-84c2a.firebaseapp.com",
    projectId: "projeto-67-84c2a",
    storageBucket: "projeto-67-84c2a.appspot.com",
    messagingSenderId: "537233853572",
    appId: "1:537233853572:web:c7c9fa1f7022db40d4c6d1"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();