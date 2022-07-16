import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useFirebase } from "../hooks/useFirebase";

export const SignIn = () => {
  const { auth } = useFirebase();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
};
