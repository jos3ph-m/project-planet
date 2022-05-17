import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'projectplanet-44124.firebaseapp.com',
  projectId: 'projectplanet-44124',
  storageBucket: 'projectplanet-44124.appspot.com',
  messagingSenderId: '1064281956748',
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
