import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAr6--dfc8daUGLq9Ttrq1xCzR-2tBXDi0",
  authDomain: "byjus-project-67.firebaseapp.com",
  projectId: "byjus-project-67",
  storageBucket: "byjus-project-67.appspot.com",
  messagingSenderId: "1014316907384",
  appId: "1:1014316907384:web:73f2832f03b5b39987668d"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
