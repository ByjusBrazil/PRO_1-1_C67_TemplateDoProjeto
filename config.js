import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
        apiKey: "AIzaSyAeH3-TIEOd35nAcoDr19-bJeBrbAb1QOo",
        authDomain: "proj58-591c9.firebaseapp.com",
        databaseURL: "https://proj58-591c9-default-rtdb.firebaseio.com",
        projectId: "proj58-591c9",
        storageBucket: "proj58-591c9.appspot.com",
        messagingSenderId: "881589585077",
        appId: "1:881589585077:web:e27a06af364c508f466afc"
      };

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();