import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyC1ECe0HfnqRTcD5uBtKHFZivmH3AGKDoo",
    authDomain: "crwn-db-e6f0e.firebaseapp.com",
    projectId: "crwn-db-e6f0e",
    storageBucket: "crwn-db-e6f0e.appspot.com",
    messagingSenderId: "646788333643",
    appId: "1:646788333643:web:4897d8b2d1240a606e8dce"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase