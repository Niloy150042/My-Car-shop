// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCVFeVFTW5-1YooNHFfJnp1-ypm7t7rfA",
  authDomain: "car-assignment-auth.firebaseapp.com",
  projectId: "car-assignment-auth",
  storageBucket: "car-assignment-auth.appspot.com",
  messagingSenderId: "1021891167404",
  appId: "1:1021891167404:web:d6a98763879c38262b4b09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth