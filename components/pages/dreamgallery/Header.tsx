import * as React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between px-6 py-5 w-full text-white shadow-[0px_2px_8px_rgba(0,0,0,0.05)]">
      <nav className="flex gap-10 my-auto whitespace-nowrap">
        <div className="flex gap-2.5 text-xl font-semibold">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/a3bd6ed8ae8f86c45d14f33cb01d854a9782bccd?placeholderIfAbsent=true"
            alt="DreamScape Logo"
            className="object-contain shrink-0 aspect-[1.09] w-[37px]"
          />
          <h1 className="self-start">DreamScape</h1>
        </div>
        <ul className="flex gap-10 self-start text-base font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
        </ul>
      </nav>
      <div className="flex gap-3 text-sm font-medium text-right">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/6dfcdc9a1e0bc2c3379cf81b099c6ec8356eace4?placeholderIfAbsent=true"
          alt="User profile"
          className="object-contain shrink-0 aspect-[1.05] rounded-[26843500px] w-[45px]"
        />
        <span className="my-auto">Sam Jam</span>
      </div>
    </header>
  );
};
