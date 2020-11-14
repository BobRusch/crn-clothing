import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCokY8wQkOgu5fcPGhiDRj3LivXNZc5bUg",
  authDomain: "crn-db-e96d4.firebaseapp.com",
  databaseURL: "https://crn-db-e96d4.firebaseio.com",
  projectId: "crn-db-e96d4",
  storageBucket: "crn-db-e96d4.appspot.com",
  messagingSenderId: "298578678216",
  appId: "1:298578678216:web:b645397a5f47fe5addb0fd",
  measurementId: "G-09TLPJ8JXZ"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
