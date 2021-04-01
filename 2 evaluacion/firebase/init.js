import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBgW3WiCEj8pmUXBIYs_ILdEeS_2EiDLD4",
    authDomain: "vue1-5a362.firebaseapp.com",
    projectId: "vue1-5a362",
    storageBucket: "vue1-5a362.appspot.com",
    messagingSenderId: "1061243707920",
    appId: "1:1061243707920:web:af06d784ab008c4a52a095"
  };
  // Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
firebaseapp.firestore().settings({timestampsInSnapshots: true});

export default firebaseapp.firestore();