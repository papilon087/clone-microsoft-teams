import { PencilSimple, Plus, UserPlus } from "phosphor-react";
import comunidev_profile from "../assets/comunidev_profile.png";

export function Chat() {
  return (
    // Final 30 min
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
      </div>
    </div>
  );
}
