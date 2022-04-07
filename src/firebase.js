import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Gerss78LcBYso78PkEPUl9vIouYyTP4",
  authDomain: "adsoft-upload-blob.firebaseapp.com",
  projectId: "adsoft-upload-blob",
  storageBucket: "adsoft-upload-blob.appspot.com",
  messagingSenderId: "581608095881",
  appId: "1:581608095881:web:61ad060a11473db2288658"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);  
const firestore = firebaseApp.firestore();  
export default firestore;


