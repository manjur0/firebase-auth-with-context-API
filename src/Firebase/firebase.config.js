// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTU0bhMG9wxwbzPFpoTVEZ-YP9lnIRsB8",
    authDomain: "auth-and-contex-api.firebaseapp.com",
    projectId: "auth-and-contex-api",
    storageBucket: "auth-and-contex-api.appspot.com",
    messagingSenderId: "621197559238",
    appId: "1:621197559238:web:eb03989578ba6867139ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;