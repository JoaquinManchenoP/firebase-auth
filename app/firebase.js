// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiuxlUU2hRXlenAKXN1UDxKihbBsD0KEc",
  authDomain: "fir-auth-5a1a6.firebaseapp.com",
  projectId: "fir-auth-5a1a6",
  storageBucket: "fir-auth-5a1a6.appspot.com",
  messagingSenderId: "950710247751",
  appId: "1:950710247751:web:3a0d77d09b3046e3852c62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
