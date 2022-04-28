// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0Kf4ux9hKke76iUPz5NgJrxr1UpzNUCQ",
    authDomain: "my-app-1f5e2.firebaseapp.com",
    projectId: "my-app-1f5e2",
    storageBucket: "my-app-1f5e2.appspot.com",
    messagingSenderId: "1079439112448",
    appId: "1:1079439112448:web:0ccc5d8350cb61ce9cdbe5",
    measurementId: "G-F0GE35MG3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;