import * as React from "react";

export const ToolSelector: React.FC = () => {
  return (
    <div className="flex gap-5 max-w-full whitespace-nowrap text-zinc-900 w-[440px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/5fd955eb-02ae-4bb9-90f3-21ca9b4b0a98?placeholderIfAbsent=true"
        alt="Tool 1"
        className="object-contain shrink-0 max-w-full rounded-xl aspect-[2.16] bg-indigo-950 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] w-[123px]"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/d4093079-81d1-47a8-9611-b34e9dc1166e?placeholderIfAbsent=true"
        alt="Tool 2"
        className="object-contain shrink-0 max-w-full bg-white rounded-xl aspect-[2.39] shadow-[0px_2px_8px_rgba(0,0,0,0.05)] w-[136px]"
      />
      <button className="flex gap-3.5 items-start px-7 py-4 bg-white rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.05)] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/4ba01c2b563f19bd383cfd997cb1e5f1a7835bb3?placeholderIfAbsent=true"
          alt="Sketch icon"
          className="object-contain shrink-0 aspect-square w-[23px]"
        />
        <span>Sketch</span>
      </button>
    </div>
  );
};
