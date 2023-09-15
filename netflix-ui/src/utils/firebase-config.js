import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD46ENcG2PrL03-02BA055Akr0d8bZKq0g",
  authDomain: "react-netflix-clone-495ca.firebaseapp.com",
  projectId: "react-netflix-clone-495ca",
  storageBucket: "react-netflix-clone-495ca.appspot.com",
  messagingSenderId: "231806757293",
  appId: "1:231806757293:web:68fb9ea92492e8acc05924",
  measurementId: "G-6VGHT8CVBF"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);