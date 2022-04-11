// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDptpa92A5NSJNUHCwQuUUj6VSHkdRv9b4",
    authDomain: "email-password-authtication.firebaseapp.com",
    projectId: "email-password-authtication",
    storageBucket: "email-password-authtication.appspot.com",
    messagingSenderId: "225681027385",
    appId: "1:225681027385:web:52a38b68e1afffb0f1b8e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;