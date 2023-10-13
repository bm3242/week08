// firebaseConfig.js

import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "",
  authDomain: "week08-1672f.firebaseapp.com",
  projectId: "week08-1672f",
  storageBucket: "week08-1672f.appspot.com",
  messagingSenderId: "3126095398",
  appId: "1:3126095398:web:30462a074fc43d260dc0e7",
  measurementId: "G-J9W1Y3GZGW"
};

const app = initializeApp(firebaseConfig);

export default app;
