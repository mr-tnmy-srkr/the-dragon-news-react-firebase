// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYuKTRyyy1dJh54w2eIOObe88RTF-y6Xo",
  authDomain: "the-dragon-news-react-fi-a1f16.firebaseapp.com",
  projectId: "the-dragon-news-react-fi-a1f16",
  storageBucket: "the-dragon-news-react-fi-a1f16.appspot.com",
  messagingSenderId: "1027820374394",
  appId: "1:1027820374394:web:975542c2fa25ab765baec3",
  measurementId: "G-GSFTYE1GLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app
