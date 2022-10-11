import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCQFhFnE69EsLoGUukLm96VkN9AbqdA1-4",
        authDomain: "projeto-67-45b9f.firebaseapp.com",
        databaseURL: "https://projeto-67-45b9f-default-rtdb.firebaseio.com",
        projectId: "projeto-67-45b9f",
        storageBucket: "projeto-67-45b9f.appspot.com",
        messagingSenderId: "431746684766",
        appId: "1:431746684766:web:7a34006d7b7f64ef12a1cf"
      };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();