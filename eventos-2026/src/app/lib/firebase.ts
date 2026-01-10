import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDCC8uP7tBvWGxyChZZZ1S1hM0a_QE7_4",
  authDomain: "eventos2026-b2ccb.firebaseapp.com",
  projectId: "eventos2026-b2ccb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
