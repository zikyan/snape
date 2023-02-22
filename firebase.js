// import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA7ObsNrbkC7FHqfs2SnLRNnbx5EIgv62U",
  authDomain: "snape-285f5.firebaseapp.com",
  projectId: "snape-285f5",
  storageBucket: "snape-285f5.appspot.com",
  messagingSenderId: "381426193868",
  appId: "1:381426193868:web:a547025360e051c7c8f969",
  measurementId: "G-DS5JDY10VL"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export {firebase, db}