import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_APIKEY,
  authDomain: 'projectplanet-44124.firebaseapp.com',
  projectId: 'projectplanet-44124',
  storageBucket: 'projectplanet-44124.appspot.com',
  messagingSenderId: '1064281956748',
  appId: process.env.REACT_FIREBASE_APPID,
};
