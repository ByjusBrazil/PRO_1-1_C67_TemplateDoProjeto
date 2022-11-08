import firebase from 'firebase';

// adicione SDK do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDfsGDNj-JOgsTT_URSEx7Bg8BaRYD-rcw",
        authDomain: "codigo-aberto-do-peixe-boi.firebaseapp.com",
        databaseURL: "https://codigo-aberto-do-peixe-boi-default-rtdb.firebaseio.com",
        projectId: "codigo-aberto-do-peixe-boi",
        storageBucket: "codigo-aberto-do-peixe-boi.appspot.com",
        messagingSenderId: "735067144214",
        appId: "1:735067144214:web:5e04ba6a9df707e1553537"
      };

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.database();