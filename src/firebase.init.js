// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcvyStSQkCbzfXP6DgbmAvqPSENMcNMns",
    authDomain: "ema-john-simple-a6f92.firebaseapp.com",
    projectId: "ema-john-simple-a6f92",
    storageBucket: "ema-john-simple-a6f92.appspot.com",
    messagingSenderId: "656486599118",
    appId: "1:656486599118:web:af20c38eaf5f7b54a1439f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default app;