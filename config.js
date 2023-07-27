import firebase from 'firebase';

// adicione SDK do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyCh_sblJSrx0UaQNG_9jO9e7St_2K6dtAA",
        authDomain: "votacao-69bb3.firebaseapp.com",
        databaseURL: "https://votacao-69bb3-default-rtdb.firebaseio.com",
        projectId: "votacao-69bb3",
        storageBucket: "votacao-69bb3.appspot.com",
        messagingSenderId: "149576982202",
        appId: "1:149576982202:web:21f4184a40fdf052106c83"
      };

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();