import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCPQGs2D3lDniRvGDnYb2-8qZJtYm8wd4A",
  authDomain: "c-67-271f6.firebaseapp.com",
  projectId: "c-67-271f6",
  storageBucket: "c-67-271f6.appspot.com",
  messagingSenderId: "1073202079453",
  appId: "1:1073202079453:web:c58f327e062680e3499d34"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
