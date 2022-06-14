// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjvcoPXQt4Uql61SoYOsxKgC3DZiDWQko",
    authDomain: "renegade-df7a6.firebaseapp.com",
    projectId: "renegade-df7a6",
    storageBucket: "renegade-df7a6.appspot.com",
    messagingSenderId: "386153835083",
    appId: "1:386153835083:web:f6119b07178765c81bfbce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const dataBase = getFirestore(app)

export default dataBase