import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAo63RtXRC50Xr6orAWx5CDv4hl8NW4EGA",
    authDomain: "fireblog-f6ecc.firebaseapp.com",
    databaseURL: "https://fireblog-f6ecc.firebaseio.com",
    projectId: "fireblog-f6ecc",
    storageBucket: "fireblog-f6ecc.appspot.com",
    messagingSenderId: "186821288688",
    appId: "1:186821288688:web:486cb2c27de9ea296d1835",
    measurementId: "G-J7W6DW629W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 


  //initialize firebase storage
  const projectStorage= firebase.storage();
  const projectFirestore= firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;


  export {projectStorage, projectFirestore,timeStamp}; 