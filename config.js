import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA50vJ4lRdbcv0ZPB-XhNqLcFo-5lpRKpo",
  authDomain: "projeto58-26878.firebaseapp.com",
  databaseURL: "https://projeto58-26878-default-rtdb.firebaseio.com",
  projectId: "projeto58-26878",
  storageBucket: "projeto58-26878.appspot.com",
  messagingSenderId: "420961865422",
  appId: "1:420961865422:web:dbc0413b2e386ee8b40a9f"
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
