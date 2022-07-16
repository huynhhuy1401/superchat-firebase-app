import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCGUh-AsXd6qzXwDbqAs2xGQQGh__mtKvk",
  authDomain: "huyduong-firebase.firebaseapp.com",
  projectId: "huyduong-firebase",
  storageBucket: "huyduong-firebase.appspot.com",
  messagingSenderId: "730664493693",
  appId: "1:730664493693:web:62aa3cf687a61a8d3e4714",
});

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export const FirebaseContext = createContext();

export const FirebaseAppProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ firebaseApp, auth, firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
};
