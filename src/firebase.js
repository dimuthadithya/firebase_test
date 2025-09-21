// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnsw9jI8bvtIVTjPkf7HiBxbEiRpTNdqs',
  authDomain: 'fir-test-d6cb7.firebaseapp.com',
  projectId: 'fir-test-d6cb7',
  storageBucket: 'fir-test-d6cb7.firebasestorage.app',
  messagingSenderId: '295215373707',
  appId: '1:295215373707:web:3795ed409619356977238e'
};

const app = initializeApp(firebaseConfig); // Initialize app
const db = getFirestore(app); // Initialize Firestore
// Auth + Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export { app, db }; // export both for use in your project
