import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCcFwKBiJIANw7mHBE8o-gkicSnIk1_Ea0",
    authDomain: "prueba-63ce2.firebaseapp.com",
    projectId: "prueba-63ce2",
    storageBucket: "prueba-63ce2.appspot.com",
    messagingSenderId: "721121106765",
    appId: "1:721121106765:web:9d8f5577b984fdbae3b504"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = app.firestore();
