import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFirebase } from "./useFirebase";

export const useFirebaseCollection = (collectionPath, queryOptions = []) => {
  const { firestore } = useFirebase();
  const [docs, setDocs] = useState();
  const collectionRef = collection(firestore, collectionPath);

  useEffect(() => {
    const q = query(collectionRef, ...queryOptions);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setDocs(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addNewDoc = async (newData) => {
    await addDoc(collectionRef, newData);
  };

  return {
    docs,
    addNewDoc,
  };
};
