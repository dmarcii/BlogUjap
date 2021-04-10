import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCwIzvACBMaEXmmVdlONSRpQQIJz6fGIBA",
    authDomain: "parte2-c7ae9.firebaseapp.com",
    databaseURL: "https://parte2-c7ae9-default-rtdb.firebaseio.com",
    projectId: "parte2-c7ae9",
    storageBucket: "parte2-c7ae9.appspot.com",
    messagingSenderId: "271957257823",
    appId: "1:271957257823:web:eac09b7a05fb921700f5ea",
    measurementId: "G-P72VE5MMPC"
  };
  // Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
firebaseapp.firestore().settings({timestampsInSnapshots: true});

export default firebaseapp.firestore();