import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCx1dqx1AaLzgi-3oK4LmOyWKQ_KkQl3Q0",
    authDomain: "first-spa.firebaseapp.com",
    databaseURL: "https://first-spa.firebaseio.com",
    projectId: "first-spa",
    storageBucket: "first-spa.appspot.com",
    messagingSenderId: "682444067643",
    appId: "1:682444067643:web:42d34f7e909110c776dd1e",
    measurementId: "G-HPKSFGBGYX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;