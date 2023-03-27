import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDaf0_ExeinDc1phEh1qGDR_TFsUfvacOg",
  authDomain: "real-time-chat-applicati-29abb.firebaseapp.com",
  projectId: "real-time-chat-applicati-29abb",
  storageBucket: "real-time-chat-applicati-29abb.appspot.com",
  messagingSenderId: "894218456875",
  appId: "1:894218456875:web:3dddb73c806a196f383f6e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()