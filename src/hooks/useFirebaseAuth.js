import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useFirebase } from "./useFirebase";

export const useFirebaseAuth = () => {
  const { auth } = useFirebase();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authListener = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      authListener();
    };
  }, [auth]);

  return { user };
};
