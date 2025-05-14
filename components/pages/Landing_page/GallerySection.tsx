import * as React from "react";
import { Button } from "./Button";

export const NavigationBar: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-start px-7 py-7 w-full text-white shadow-[0px_2px_8px_rgba(0,0,0,0.05)] max-md:px-5 max-md:max-w-full">
      <nav className="flex gap-10 items-start text-lg font-bold leading-none whitespace-nowrap max-md:max-w-full">
        <h1 className="self-stretch text-4xl border border-solid basis-auto border-black border-opacity-0">
          DreamScape
        </h1>
        <a href="#" className="mt-4">
          Home
        </a>
        <a href="#" className="mt-4">
          Gallery
        </a>
        <a href="#" className="mt-4">
          Profile
        </a>
      </nav>
      <div className="flex gap-10 mt-1.5">
        <a href="#" className="my-auto text-lg leading-none">
          Contact us
        </a>
        <Button variant="secondary">
          Connect Wallet
          <br />
        </Button>
      </div>
    </header>
  );
};
