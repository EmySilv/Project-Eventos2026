import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export async function getEventos() {
  const snapshot = await getDocs(collection(db, "eventos"));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
