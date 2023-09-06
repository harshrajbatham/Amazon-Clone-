// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7GB2f0vKS9x1dIQCMRSjROpOVK6iweMo",
  authDomain: "byharsh-f711c-690dc.firebaseapp.com",
  projectId: "byharsh-f711c",
  storageBucket: "byharsh-f711c.appspot.com",
  messagingSenderId: "511668673715",
  appId: "1:511668673715:web:ae01b20aa098136b55e4c6",
  measurementId: "G-1C19XGDNZ1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
