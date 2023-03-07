import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB0SkxCKy8DKFSjZeOLw5f7k-p5t3HXQII",
  authDomain: "projeto-67-7e0c7.firebaseapp.com",
  databaseURL: "https://projeto-67-7e0c7-default-rtdb.firebaseio.com",
  projectId: "projeto-67-7e0c7",
  storageBucket: "projeto-67-7e0c7.appspot.com",
  messagingSenderId: "788796201324",
  appId: "1:788796201324:web:3eb083ca8e05ef608dbb49"
};

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();