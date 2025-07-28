// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmjnxp2ZmE6HxFj2XyJ4nFv6hC5gtEK1Q",
  authDomain: "react-app-adfcc.firebaseapp.com",
  projectId: "react-app-adfcc",
  storageBucket: "react-app-adfcc.appspot.com", // ✅ corrected domain (was missing ".com")
  messagingSenderId: "1055100789849",
  appId: "1:1055100789849:web:247fb7a77dc57dbc17fd48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Export app and auth
export { app, auth };
