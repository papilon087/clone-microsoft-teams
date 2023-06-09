import { FunnelSimple, Gear } from "phosphor-react";

export function Chatlist() {
  return (
    <div className="hidden md:flex md:flex-1 shadow-[-8px_10px_10px_-5px_rgba(0,0,0,0.1)]">
      <div className="w-full">
        <div className="flex w-full h-[60px] items-center justify-between px-5 border-b border-neutral-200">
          <h2 className="text-lg font-bold">Chat</h2>
          <div className="flex justify-center gap-3">
            <FunnelSimple
              size={20}
              weight="light"
              className="hover:text-indigo-800"
            />
            <Gear size={20} weight="light" className="hover:text-indigo-800" />
          </div>
        </div>

        <div>
          <p className="text-sm px-[50px] py-5 text-center">
            Aqui você verá menções, respostas e outras notificações.
          </p>
        </div>
      </div>
    </div>
  );
}
