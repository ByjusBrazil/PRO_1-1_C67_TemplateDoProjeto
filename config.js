import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = { apiKey: "AIzaSyBVljdzKErSjY3SPFlCoGbaNqz0e031PZA", authDomain: "projeto-58-a072b.firebaseapp.com", databaseURL: "https://projeto-58-a072b-default-rtdb.firebaseio.com", projectId: "projeto-58-a072b", storageBucket: "projeto-58-a072b.appspot.com", messagingSenderId: "1059567849038", appId: "1:1059567849038:web:41b9a2890ba51348367d1f" };

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();