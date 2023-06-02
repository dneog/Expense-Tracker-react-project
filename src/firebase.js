// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcs8nLn2SZVKhB4JcRURQvIPdouSEVqgE",
  authDomain: "auth-51bda.firebaseapp.com",
  databaseURL: "https://auth-51bda-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-51bda",
  storageBucket: "auth-51bda.appspot.com",
  messagingSenderId: "274447857370",
  appId: "1:274447857370:web:f61e0bf3f6f92ee2ec97e3"
};

const db= firebase.initializeApp(firebaseConfig)
export default db.database().ref()