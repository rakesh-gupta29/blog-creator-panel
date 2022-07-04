import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import {  getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBJiomqKuo60ga__MIOs_urdwJ0-YpCGuo",
  authDomain: "fir-4308b.firebaseapp.com",
  projectId: "fir-4308b",
  storageBucket: "fir-4308b.appspot.com",
  messagingSenderId: "419428546452",
  appId: "1:419428546452:web:79d9917254483b35194181"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore( app );
export const storage = getStorage( app );