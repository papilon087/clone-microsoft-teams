import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCylvGvcBUGqtKJFUwzRbVlhQrmYMk-fRU",

  authDomain: "teams-clone-4882e.firebaseapp.com",

  projectId: "teams-clone-4882e",

  storageBucket: "teams-clone-4882e.appspot.com",

  messagingSenderId: "594200949010",

  appId: "1:594200949010:web:a6839cee2fc8701e0d83cb",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
