import { PaperPlaneRight, PencilSimple, Plus, UserPlus } from "phosphor-react";
import comunidev_profile from "../assets/comunidev_profile.png";
import { FormEvent, useState } from "react";

interface MessagesList {
  idMessage: string;
  username: string;
  message: string;
  created_at: string;
  avatarURL: string;
  userId: string;
}
export function Chat() {
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);

  async function handleSubmitMessage(e: FormEvent) {
    e.preventDefault();
    //setMessagesList();
    setMessage("");
  }

  return (
    <div className="flex-1 shadow-[-8px_10px_10px_-5px_rgba(0,0,0,0.1)] overflow-hidden">
      <div className="flex flex-col w-full h-full overflow-hidden">
        <div className="flex w-full h-[60px] items-center justify-between px-5 border-b border-neutral-200">
          <div className="flex gap-3 items-center justify-center h-full">
            <div className="w-8 h-8 rounded-full flex items-center justify-center relative overflow-hidden ">
              <img src={comunidev_profile} alt="Logotipo Comunidev" />
            </div>
            <div className="flex gap-1 items-center justify-center">
              <h2 className="text-lg font-bold">Grupo Comunidev</h2>
              <PencilSimple size={20} weight="light" />
            </div>

            <div className="flex h-full items-center border-b-2 border-indigo-800">
              <p>Chat</p>
            </div>

            <div className="flex h-full items-center">
              <p>Files</p>
            </div>
            <Plus size={20} weight="light" />
          </div>

          <div className="flex justify-center gap-3">
            <UserPlus size={20} weight="light" />
            <span className="text-sm">11</span>
          </div>
        </div>

        <div className="flex flex-1 p-5 overflow-y-scroll">
          <ul className="flex flex-col gap-3 w-full">
            {messagesList ? (
              messagesList.map((message) => {
                return <li key={message}></li>;
              })
            ) : (
              <p className="text-2xl font-bold px-[50px] py-5 text-center">
                Nenhuma mensagem eviada até o momento
              </p>
            )}
          </ul>
        </div>

        <form
          className="flex w-full px-5 items-center justify-center gap-2 mb-6"
          onSubmit={handleSubmitMessage}
        >
          <textarea
            name="message"
            id="message"
            rows={1}
            value={message}
            className="bg-white w-full max-w-5xl p-4 resize-none sm:text-sm shadow-md border-b-2 border-indigo-700 placeholder:text-neutral-800 focus:outline-0"
            placeholder="Digite uma mensagem aqui"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">
            <PaperPlaneRight size={24} weight="light" />
          </button>
        </form>
      </div>
    </div>
  );
}
