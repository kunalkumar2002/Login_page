import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9yflUbUvb_smBrRrqvLm3eIbmxV4c4x8",
  authDomain: "login-863dd.firebaseapp.com",
  projectId: "login-863dd",
  storageBucket: "login-863dd.appspot.com",
  messagingSenderId: "873108633489",
  appId: "1:873108633489:web:1046d5949bbd22bba78c30",
  measurementId: "G-1LZ62KJ2NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { app , auth}