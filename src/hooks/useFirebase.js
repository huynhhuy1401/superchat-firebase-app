import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseAppProvider";

export const useFirebase = () => {
  const { firebaseApp, firestore, auth } = useContext(FirebaseContext);

  return {
    firebaseApp,
    firestore,
    auth,
  };
};
