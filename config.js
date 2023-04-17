import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCcbh1JpLtOpEUqNeS3KbpOv-8aJnULH0U",
  authDomain: "projeto-58-bf712.firebaseapp.com",
  databaseURL: "https://projeto-58-bf712-default-rtdb.firebaseio.com",
  projectId: "projeto-58-bf712",
  storageBucket: "projeto-58-bf712.appspot.com",
  messagingSenderId: "174148008994",
  appId: "1:174148008994:web:a55d78dbb81c0ce5665e7b"
};

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
