import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDZQ_egsEtCdkFbOY7fCJe0WvPNuPmjWuA",
    authDomain: "clothing-db-eb15f.firebaseapp.com",
    databaseURL: "https://clothing-db-eb15f.firebaseio.com",
    projectId: "clothing-db-eb15f",
    storageBucket: "clothing-db-eb15f.appspot.com",
    messagingSenderId: "305641248209",
    appId: "1:305641248209:web:dc0a6a9afcf3fedf74bcf0"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }
      catch(error){
        console.log('Error creating user', error);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;