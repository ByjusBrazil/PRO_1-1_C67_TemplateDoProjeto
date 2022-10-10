import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
        apiKey: "AIzaSyBVHLSBxaLlnV76I4ese6ODhFqEbQf_6GY",
        authDomain: "file-67.firebaseapp.com",
        databaseURL: "https://file-67-default-rtdb.firebaseio.com",
        projectId: "file-67",
        storageBucket: "file-67.appspot.com",
        messagingSenderId: "363002570530",
        appId: "1:363002570530:web:f0f84c3c721cd931a5277b"
      
      
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();