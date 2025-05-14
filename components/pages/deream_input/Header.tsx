import * as React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between px-11 py-7 w-full text-white whitespace-nowrap shadow-[0px_2px_8px_rgba(0,0,0,0.05)] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 self-start mt-2 text-2xl font-semibold">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/21c0f5cabbc02afcc4d7199b7f43f63b7df1ae28?placeholderIfAbsent=true"
          alt="DreamScape Logo"
          className="object-contain shrink-0 self-start mt-3 aspect-[1.28] w-[23px]"
        />
        <h1>DreamScape</h1>
      </div>
      <nav className="px-8 pt-3.5 pb-8 text-base text-center rounded-2xl shadow-[0px_8px_32px_rgba(0,0,0,0.58)] max-md:px-5">
        Home
      </nav>
    </header>
  );
};
