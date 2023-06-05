import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC_CK79dPgvxmu44Hu5KWI67pSn2jaT2XM",
    authDomain: "mi-primer-firebase-fdc7a.firebaseapp.com",
    projectId: "mi-primer-firebase-fdc7a",
    storageBucket: "mi-primer-firebase-fdc7a.appspot.com",
    messagingSenderId: "478124364453",
    appId: "1:478124364453:web:228c5b3f56b89eea09334c"
}

app.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = firebase.firestore();