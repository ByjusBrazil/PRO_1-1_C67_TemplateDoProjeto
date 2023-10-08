import firebase from 'firebase';

// adicione SDK do Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPC3ciQSGpxSyn5Fs5dZ_VLU2wO1hsPfc",
    authDomain: "appvotacaodaequipe-4d0b8.firebaseapp.com",
    projectId: "appvotacaodaequipe-4d0b8",
    storageBucket: "appvotacaodaequipe-4d0b8.appspot.com",
    messagingSenderId: "646871658829",
    appId: "1:646871658829:web:0f062d03c1fc5abef7c704"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.database();