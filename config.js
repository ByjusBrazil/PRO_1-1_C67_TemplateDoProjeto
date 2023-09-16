import firebase from 'firebase'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTt4LfvsAkzR1Gu2Mmf2epwe6LLeLNPu8",
  authDomain: "app60-6ec39.firebaseapp.com",
  databaseURL: "https://app60-6ec39-default-rtdb.firebaseio.com",
  projectId: "app60-6ec39",
  storageBucket: "app60-6ec39.appspot.com",
  messagingSenderId: "738417520874",
  appId: "1:738417520874:web:0d99ef5673b61015b82793"
};

const app = initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig);

export default firebase.database();