import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDC546Q8uVq_g7VqDZHd1_ChKsSkwScxek",
    authDomain: "whats-app-clone-f11e4.firebaseapp.com",
    databaseURL: "https://whats-app-clone-f11e4.firebaseio.com",
    projectId: "whats-app-clone-f11e4",
    storageBucket: "whats-app-clone-f11e4.appspot.com",
    messagingSenderId: "1031591242960",
    appId: "1:1031591242960:web:94e06f193d9e34eb1ec2d5",
    measurementId: "G-60LGQYJ9BG"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebaseapp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;