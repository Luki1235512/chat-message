import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARdhoVxqexyxH11mWvYtpL5gbKWgNLSRE",
    authDomain: "discord-clone-a246d.firebaseapp.com",
    projectId: "discord-clone-a246d",
    storageBucket: "discord-clone-a246d.appspot.com",
    messagingSenderId: "423623795104",
    appId: "1:423623795104:web:d9d7e73cc3c56e431c44c5",
    measurementId: "G-FMW02PWGJT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;