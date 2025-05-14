"use client";
import React from 'react';
import { ActionButton } from './ActionButton';

interface HeaderProps {
  date: string;
}

export const Header: React.FC<HeaderProps> = ({ date }) => {
  return (
    <header className="flex flex-wrap gap-5 justify-between w-full text-sm max-md:mr-0.5 max-md:max-w-full">
      <div className="flex gap-5 items-center">
        <ActionButton icon="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/b5cffd2393231732545003b62f1278f20fd6e445?placeholderIfAbsent=true">
          Back to Gallery
        </ActionButton>
        <div className="flex shrink-0 self-stretch my-auto w-px h-7 bg-indigo-100" />
        <time className="self-stretch my-auto basis-auto text-stone-300">
          {date}
        </time>
      </div>
      <div className="flex gap-3.5 font-medium text-center">
        <div className="flex flex-col items-center px-8 pt-3 pb-7 bg-indigo-800 rounded-2xl shadow-[0px_8px_32px_rgba(67,24,209,0.2)] max-md:px-5">
          <span className="text-indigo-700">Share Dream</span>
          <span className="text-white">Share Dream</span>
        </div>
        <button className="px-9 pt-3 pb-7 text-white bg-indigo-800 rounded-2xl shadow-[0px_8px_32px_rgba(67,24,209,0.2)] max-md:px-5">
          Mint as NFT
        </button>
      </div>
    </header>
  );
};
