import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5darxaXZpsioljwCHi9znVWV5A24tdGg",
    authDomain: "crown-db-b1ecc.firebaseapp.com",
    databaseURL: "https://crown-db-b1ecc.firebaseio.com",
    projectId: "crown-db-b1ecc",
    storageBucket: "crown-db-b1ecc.appspot.com",
    messagingSenderId: "1001985272401",
    appId: "1:1001985272401:web:36c5b7526dde404d75e670",
    measurementId: "G-VQDGL3NK57"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

    console.log(snapShot)
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

