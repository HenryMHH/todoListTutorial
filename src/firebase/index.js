// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVSktJTK8XjFl9AvuFK6iK7RTnf6PsiO4",
  authDomain: "cobalt-broker-298003.firebaseapp.com",
  projectId: "cobalt-broker-298003",
  storageBucket: "cobalt-broker-298003.appspot.com",
  messagingSenderId: "599622902192",
  appId: "1:599622902192:web:cb538a60d2eb508dfc7675",
  measurementId: "G-QY0K67LGBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
