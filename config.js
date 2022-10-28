import firebase from 'firebase'

// adicione SDK do Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyBjCnE6rTvJn_XVxtgRk203QlZs4vzgUQI',
  authDomain: 'times-7901b.firebaseapp.com',
  databaseURL: 'https://times-7901b-default-rtdb.firebaseio.com',
  projectId: 'times-7901b',
  storageBucket: 'times-7901b.appspot.com',
  messagingSenderId: '755816545609',
  appId: '1:755816545609:web:6cc5f7d7cb520d329f6e98'
}
// Initialice o Firebase
firebase.initializeApp(firebaseConfig)

export default firebase.database()
