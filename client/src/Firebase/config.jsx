// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtJvj8-TDw4FZQ_5Yg_gQvppv9LzsUB8s",
    authDomain: "note-app-longnhat.firebaseapp.com",
    projectId: "note-app-longnhat",
    storageBucket: "note-app-longnhat.appspot.com",
    messagingSenderId: "185491826423",
    appId: "1:185491826423:web:966477c87351b1d70815f2",
    measurementId: "G-8CW020Y4WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);