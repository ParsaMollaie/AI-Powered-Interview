import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDY_R97G_mFV-6jp-11UjSItMXZvUNvWMY",
  authDomain: "prepwise-800aa.firebaseapp.com",
  projectId: "prepwise-800aa",
  storageBucket: "prepwise-800aa.firebasestorage.app",
  messagingSenderId: "871677659325",
  appId: "1:871677659325:web:157cb7d52b87448cc40fd4",
  measurementId: "G-D93CQX6EH0"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);