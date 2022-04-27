// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4yHKaRYi9vHM-cBOkG-fbuo1iyJ24aMM",
    authDomain: "volunteer-network-63770.firebaseapp.com",
    projectId: "volunteer-network-63770",
    storageBucket: "volunteer-network-63770.appspot.com",
    messagingSenderId: "1042010082389",
    appId: "1:1042010082389:web:898b728fd79efae20818dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;