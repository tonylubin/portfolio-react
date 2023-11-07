// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQd0kVHDDtnfwNQyeo20V4ybpugbFt3z8",
  authDomain: "anthonylubin-portfolio.firebaseapp.com",
  projectId: "anthonylubin-portfolio",
  storageBucket: "anthonylubin-portfolio.appspot.com",
  messagingSenderId: "248022745674",
  appId: "1:248022745674:web:ab40cecbda5d46b5481cb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;