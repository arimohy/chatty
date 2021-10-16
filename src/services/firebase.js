import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyCPOzPfoq10T9XdkHD5B5x3idaEz0q-voA",
    authDomain: "chatty-25936.firebaseapp.com",
    projectId: "chatty-25936",
    storageBucket: "chatty-25936.appspot.com",
    messagingSenderId: "1087498410803",
    appId: "1:1087498410803:web:0f9438d9937bda1148bc46",
    measurementId: "G-T3GNYSBX0Z"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();