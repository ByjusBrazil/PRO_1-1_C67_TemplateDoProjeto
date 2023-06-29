import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
.....
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
