import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
apiKey: "AIzaSyAJL4-9PyrKVlf1JQZy8Il-n8KcEbfvxfE",
  authDomain: "teamvote-dde95.firebaseapp.com",
  databaseURL: "https://teamvote-dde95-default-rtdb.firebaseio.com",
  projectId: "teamvote-dde95",
  storageBucket: "teamvote-dde95.appspot.com",
  messagingSenderId: "931285842212",
  appId: "1:931285842212:web:5960b682ff5f43c751dbb1"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
