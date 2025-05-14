"use client";

import * as React from "react";

export const DashboardHeader: React.FC = () => {
  return (
    <header className="flex gap-10 items-start px-7 pt-6 pb-11 w-full text-lg font-bold leading-none text-white whitespace-nowrap shadow-[0px_2px_8px_rgba(0,0,0,0.05)] max-md:px-5 max-md:max-w-full">
      <h1 className="self-stretch text-4xl">DreamScape</h1>
      <nav className="flex gap-10">
        <a href="#" className="mt-4">Home</a>
        <a href="#" className="grow shrink mt-4 w-[967px] max-md:max-w-full">Gallery</a>
      </nav>
    </header>
  );
};
