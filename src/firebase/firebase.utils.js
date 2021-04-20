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
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (snapshot) => {
  const transformedCollection = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
    routeName: encodeURI(doc.data().title.toLowerCase()),
  }));

  return transformedCollection.reduce((obj, item) => {
    obj[item.routeName] = item;
    return obj;
  }, {});
};

firebase.initializeApp(firebaseConfig);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
