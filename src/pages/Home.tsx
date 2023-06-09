import { useEffect, useState } from "react";
import { Chat } from "../components/Chat";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [user, setUser] = useState<User | null>();
  const auth = getAuth(app);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/");
        setUser(null);
      }
    });
  });

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (!user) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="flex flex-col h-screen">
      <Header user={user} handleSignOut={handleSignOut} />
      <main className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Chat user={user} />
      </main>
    </div>
  );
}
