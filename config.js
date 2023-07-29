import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDsks9yRy8zzxHp3tK1tq0NPJz2wnjhhFE",
  authDomain: "projeto-67-d18ff.firebaseapp.com",
  databaseURL: "https://projeto-67-d18ff-default-rtdb.firebaseio.com",
  projectId: "projeto-67-d18ff",
  storageBucket: "projeto-67-d18ff.appspot.com",
  messagingSenderId: "1093605918378",
  appId: "1:1093605918378:web:ec789f65d753ff555ef2d3"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();