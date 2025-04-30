import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjl80DPUGlRQL8glZHHKIs9a14urI18p8",
  authDomain: "mockmint-f41e9.firebaseapp.com",
  projectId: "mockmint-f41e9",
  storageBucket: "mockmint-f41e9.firebasestorage.app",
  messagingSenderId: "17826230927",
  appId: "1:17826230927:web:f3df66f1c6a0d84d3776fa",
  measurementId: "G-XRKH8MFBWG"
};

const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);