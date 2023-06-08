import { Chat } from "../components/Chat";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Chat />
      </main>
    </div>
  );
}
