import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    const firebaseConfig = {
        apiKey: "AIzaSyAkRFoPLBakzqWwCbkSz9sNcps6kiKXLnQ",
        authDomain: "pro67-b9f09.firebaseapp.com",
        projectId: "pro67-b9f09",
        storageBucket: "pro67-b9f09.appspot.com",
        messagingSenderId: "739017569189",
        appId: "1:739017569189:web:665cf65fe915aeaae06e4c"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();