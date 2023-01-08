import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6gOM9n4FkkYvRSDsLBSwNAxQLCGofTV0",
  authDomain: "abdul-aziz-simple.firebaseapp.com",
  projectId: "abdul-aziz-simple",
  storageBucket: "abdul-aziz-simple.appspot.com",
  messagingSenderId: "229993918379",
  appId: "1:229993918379:web:abed283d5a292f523e6cee",
  measurementId: "G-N9PWGBM3GL",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
