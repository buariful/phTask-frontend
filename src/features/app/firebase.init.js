// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjeB8lPfzQGqQtPuN7LsTVsMgpfJZDXzU",
  authDomain: "ph-job-task-2e675.firebaseapp.com",
  projectId: "ph-job-task-2e675",
  storageBucket: "ph-job-task-2e675.appspot.com",
  messagingSenderId: "340138896299",
  appId: "1:340138896299:web:d1d0b6bb4942afcebf00ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
