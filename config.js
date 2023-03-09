import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
  
  apiKey: "AIzaSyAAPX_9-vkZY2l4qyChQjoCSrjAYNWK6wM",
  authDomain: "aulateste-97d65.firebaseapp.com",
  projectId: "aulateste-97d65",
  storageBucket: "aulateste-97d65.appspot.com",
  messagingSenderId: "1067682544683",
  appId: "1:1067682544683:web:fe3716434ddd5fe8fd3e6e"

};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
