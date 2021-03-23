import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDna4SkMNtje62zCmS3I3GcvT36IMwfhPQ",
  authDomain: "crownclothing-605c2.firebaseapp.com",
  databaseURL: "https://crownclothing-605c2-default-rtdb.firebaseio.com",
  projectId: "crownclothing-605c2",
  storageBucket: "crownclothing-605c2.appspot.com",
  messagingSenderId: "760735865156",
  appId: "1:760735865156:web:8eb5b3b0baad80c41d5f11",
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
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
        ...addtionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
