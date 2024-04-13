// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW3BjkGSgHVAH8I1w95604QfmSVeF5Q0Y",
  authDomain: "dragon-news-5a364.firebaseapp.com",
  projectId: "dragon-news-5a364",
  storageBucket: "dragon-news-5a364.appspot.com",
  messagingSenderId: "124580624626",
  appId: "1:124580624626:web:a9593ee2440a2d0dc4f86b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;