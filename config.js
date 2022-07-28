import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC-86m_ulfMsi0HMpx-xkCZq8EXVAMKukU",
    authDomain: "projeto-67-83de3.firebaseapp.com",
    databaseURL: "https://projeto-67-83de3-default-rtdb.firebaseio.com",
    projectId: "projeto-67-83de3",
    storageBucket: "projeto-67-83de3.appspot.com",
    messagingSenderId: "203438974490",
    appId: "1:203438974490:web:c960d6e75a73bbb49913a3"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();