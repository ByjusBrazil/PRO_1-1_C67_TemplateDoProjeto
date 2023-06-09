import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC8JE6YBN8yVkF5C0heY0EtbpKRjZDQM6o",
  authDomain: "projeto-58-4ce14.firebaseapp.com",
  databaseURL: "https://projeto-58-4ce14-default-rtdb.firebaseio.com",
  projectId: "projeto-58-4ce14",
  storageBucket: "projeto-58-4ce14.appspot.com",
  messagingSenderId: "941840083043",
  appId: "1:941840083043:web:a5df118a126eea7fbd3056"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
