"use client";

import * as React from "react";

interface DreamCardProps {
  title: string;
  description: string;
  colorClass: string;
  hasBookmark?: boolean;
}

export const DreamCard: React.FC<DreamCardProps> = ({
  title,
  description,
  colorClass,
  hasBookmark = true,
}) => {
  return (
    <article className="flex flex-col items-start p-7 mx-auto w-full bg-white rounded-2xl border border-blue-50 border-solid shadow-[0px_5px_14px_rgba(0,0,0,0.03)] max-md:px-5 max-md:mt-7">
      <header className="flex gap-5 items-start text-lg font-semibold leading-normal text-zinc-900">
        <div className={`flex shrink-0 ${colorClass} h-[50px] rounded-[30388866px] w-[50px]`} />
        <h3 className="basis-auto">{title}</h3>
      </header>
      <p className="mt-5 text-lg leading-6 text-neutral-700">{description}</p>
      <footer className="flex gap-2.5 mt-11 text-base font-medium text-center whitespace-nowrap max-md:mt-10">
        <button className="px-7 py-3.5 text-white rounded-lg bg-indigo-950 max-md:px-5">
          View
        </button>
        <button className="px-7 py-4 text-indigo-700 rounded-lg border border-indigo-700 border-solid max-md:px-5">
          Edit
        </button>
        {hasBookmark && (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/a5d33197dd6f91607755d2067b5c7d8fcc088e93?placeholderIfAbsent=true"
            alt="Bookmark"
            className="object-contain shrink-0 my-auto w-12 rounded-none aspect-square"
          />
        )}
      </footer>
    </article>
  );
};
