import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC64ecpPIhaSuxSuYbn8iSFQr8R_OPCfbI",
  authDomain: "prepwise-18086.firebaseapp.com",
  projectId: "prepwise-18086",
  storageBucket: "prepwise-18086.firebasestorage.app",
  messagingSenderId: "128725645561",
  appId: "1:128725645561:web:16733d187a980d35fd8a28",
  measurementId: "G-BL2ESXMHL8",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
