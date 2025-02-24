import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase";

export const FetchCorsiBlockResults = async (currentUser) => {
  if (!currentUser) {
    throw new Error("User is not logged in!");
  }

  try {
    const userDocRef = doc(db, "userResults", currentUser.uid);
    const resultsCollectionRef = collection(userDocRef, "corsiBlockResults");

    const querySnapshot = await getDocs(resultsCollectionRef);

    const results = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return results;
  } catch (error) {
    console.error("Błąd podczas odczytu danych z Firestore:", error);
    return [];
  }
};
