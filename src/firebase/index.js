// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBHS0h3_r_6j8x8dTc4IFxHx7L6FoeRj9k',
  authDomain: 'my-app-fd0b7.firebaseapp.com',
  projectId: 'my-app-fd0b7',
  storageBucket: 'my-app-fd0b7.appspot.com',
  messagingSenderId: '9881800744',
  appId: '1:9881800744:web:5b1934a99893374a55e51d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
