import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAHLtROANunIAaPyD8Auezz4MRjA_8SJxs",
  authDomain: "online-shop-faee4.firebaseapp.com",
  projectId: "online-shop-faee4",
  storageBucket: "online-shop-faee4.appspot.com",
  messagingSenderId: "9231338715",
  appId: "1:9231338715:web:24f57a2055108a85f490fe",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
