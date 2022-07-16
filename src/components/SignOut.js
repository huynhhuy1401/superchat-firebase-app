import { signOut } from "firebase/auth";
import { useFirebase } from "../hooks/useFirebase";

export const SignOut = () => {
  const { auth } = useFirebase();
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    )
  );
};
