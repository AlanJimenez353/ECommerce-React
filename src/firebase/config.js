// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXU-bLqCKEGazlvDEbAMH2ZNk25Ggmj8A",
  authDomain: "react-coder-b9d76.firebaseapp.com",
  projectId: "react-coder-b9d76",
  storageBucket: "react-coder-b9d76.appspot.com",
  messagingSenderId: "291733982882",
  appId: "1:291733982882:web:34b7ea1f4f2d70cc9051fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Se exporta porque se consume la constante db desde el resto de los componentes de la aplicacion
export const db =getFirestore(app)