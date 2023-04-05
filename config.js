import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBiEooX93jtK42BBOTCnHZU4WilJEBcrW4",
  authDomain: "projeto-67-5b551.firebaseapp.com",
  databaseURL: "https://projeto-67-5b551-default-rtdb.firebaseio.com",
  projectId: "projeto-67-5b551",
  storageBucket: "projeto-67-5b551.appspot.com",
  messagingSenderId: "593759892991",
  appId: "1:593759892991:web:eeb7478e0ca8a41e22a3ca"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();