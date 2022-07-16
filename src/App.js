import "./App.css";
import { Header } from "./components/Header";
import { SignIn } from "./components/SignIn";
import { ChatRoom } from "./components/ChatRoom";
import { useFirebaseAuth } from "./hooks/useFirebaseAuth";

function App() {
  const { user } = useFirebaseAuth();
  return (
    <div className="App">
      <Header></Header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
