import firebase from 'firebase';

// adicione SDK do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBdkXIIwXximic81iggy3PjxY-n-z7aKik",
        authDomain: "projeto-67-6cecf.firebaseapp.com",
        databaseURL: "https://projeto-67-6cecf-default-rtdb.firebaseio.com",
        projectId: "projeto-67-6cecf",
        storageBucket: "projeto-67-6cecf.appspot.com",
        messagingSenderId: "609396474902",
        appId: "1:609396474902:web:1063a56dd10a0668b0e137"
      };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();