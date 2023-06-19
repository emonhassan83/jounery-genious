// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz-4dvNfCDpn8JpszmdIj_c0kOtfesLH8",
  authDomain: "journery-genious.firebaseapp.com",
  projectId: "journery-genious",
  storageBucket: "journery-genious.appspot.com",
  messagingSenderId: "459315596070",
  appId: "1:459315596070:web:cc4f7a4267f07134138fe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;