import firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyCTqalagJQ2JuoelEFMfDYELoz0RuQjb7E",
    authDomain: "aulateste-29020.firebaseapp.com",
    projectId: "aulateste-29020", storageBucket: "aulateste-29020.appspot.com",
    messagingSenderId: "121026569256",
    appId: "1:121026569256:web:a86cba956e9356557b811d"
 };

  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();