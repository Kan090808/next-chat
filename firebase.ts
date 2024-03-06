// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';

// // Replace this with your Firebase project's configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCJm445lA_XYj924YQUzL6qdN0gtYtBKf4",
//   authDomain: "chat-849ed.firebaseapp.com",
//   projectId: "chat-849ed",
//   storageBucket: "chat-849ed.appspot.com",
//   messagingSenderId: "508808717700",
//   appId: "1:508808717700:web:10eb53d6a84f0c8398a9d1",
//   measurementId: "G-YPF4N3JGSP"
// };

// // Initialize Firebase only if there isn't an instance already
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const db = firebase.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// // Explicitly state the types for exports if needed
// export { db, auth, storage };

// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Define an interface for your Firebase configuration
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string; // Make measurementId optional
}

// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyCJm445lA_XYj924YQUzL6qdN0gtYtBKf4",
  authDomain: "chat-849ed.firebaseapp.com",
  projectId: "chat-849ed",
  storageBucket: "chat-849ed.appspot.com",
  messagingSenderId: "508808717700",
  appId: "1:508808717700:web:10eb53d6a84f0c8398a9d1",
  measurementId: "G-YPF4N3JGSP" // Optional, can be omitted
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Conditionally initialize Analytics if it's supported
let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  // Firebase Analytics can only be initialized on the client-side
  analytics = getAnalytics(app);
}
