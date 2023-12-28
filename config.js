import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD1GQiaov2jaDLA4YvYCvFvm40YDVcP8TI",

    authDomain: "pj65-ae596.firebaseapp.com",
  
    databaseURL: "https://pj65-ae596-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "pj65-ae596",
  
    storageBucket: "pj65-ae596.appspot.com",
  
    messagingSenderId: "675431023638",
  
    appId: "1:675431023638:web:26a4e21f1b40a43484a137" 
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
