import { CheckCircle } from "phosphor-react";

export function Avatar() {
  return (
    <div className="w-8 h-8 text-indigo-800 rounded-full flex items-center justify-center text-xs font-semibold relative uppercase">
      <div className="overflow-hidden rounded-full">
        <img src="https://github.com/papilon087.png" alt="Avatar do usuário" />
      </div>
      <div className="absolute flex items-center -right-1 -bottom-1 rounded-full border border-indigo-800 bg-indigo-800">
        <CheckCircle size={14} color="#92c353" weight="fill" />
      </div>
    </div>
  );
}
