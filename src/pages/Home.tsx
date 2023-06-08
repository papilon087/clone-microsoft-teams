import { Sidebar, Chat } from "phosphor-react";
import { Header } from "../components/Header";

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
