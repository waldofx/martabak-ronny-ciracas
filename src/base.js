import * as firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFjscDC5FConSbX0-9BBmplpLbeND1JX4",
    authDomain: "martabak-ronny.firebaseapp.com",
    projectId: "martabak-ronny",
    storageBucket: "martabak-ronny.appspot.com",
    messagingSenderId: "771550618035",
    appId: "1:771550618035:web:636902949b47d476f6abc6",
    measurementId: "G-QQ1RJNDY5M",
};

export const app = firebase.initializeApp(firebaseConfig);
