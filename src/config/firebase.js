// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuQYbQirTn08oqgBdrvlz_PsH-VxctI58",
  authDomain: "tiktok-clone---jornada-dev.firebaseapp.com",
  projectId: "tiktok-clone---jornada-dev",
  storageBucket: "tiktok-clone---jornada-dev.appspot.com",
  messagingSenderId: "909116662658",
  appId: "1:909116662658:web:5f78da5357238fb950a59b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;