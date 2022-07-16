import { limit, orderBy, serverTimestamp } from "firebase/firestore";
import { useRef, useState } from "react";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";
import { useFirebaseCollection } from "../hooks/useFirebaseCollection";
import { ChatMessage } from "./ChatMessage";

export const ChatRoom = () => {
  const { user } = useFirebaseAuth();
  const queryOptions = [orderBy("createdAt"), limit(25)];
  const { docs: messages, addNewDoc: addNewMessage } = useFirebaseCollection(
    "messages",
    queryOptions
  );
  const dummy = useRef();
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = user;
    const newData = {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    };

    addNewMessage(newData);
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
};
