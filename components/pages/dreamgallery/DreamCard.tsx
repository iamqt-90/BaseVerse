"use client";

import * as React from "react";

interface DreamCardProps {
  title: string;
  date: string;
  description: string;
  iconSrc: string;
  iconBgColor: string;
}

export const DreamCard: React.FC<DreamCardProps> = ({
  title,
  date,
  description,
  iconSrc,
  iconBgColor,
}) => {
  return (
    <article className="flex flex-col items-start px-7 py-7 w-full bg-violet-50 rounded-2xl border border-blue-50 border-solid shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
      <header className="flex gap-3.5">
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className={`object-contain shrink-0 w-11 h-11 ${iconBgColor} aspect-[1.05] rounded-[26843500px]`}
        />
        <div className="flex flex-col self-start">
          <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
          <time className="self-start mt-2.5 text-sm text-stone-500">{date}</time>
        </div>
      </header>
      <p className="mt-6 text-base leading-6 text-neutral-700">{description}</p>
      <div className="flex gap-2.5 self-stretch mt-12 text-sm font-medium text-center whitespace-nowrap">
        <button className="px-8 pt-2.5 pb-6 text-white rounded-lg bg-indigo-950">
          View
        </button>
        <button className="px-10 pt-2.5 pb-6 text-indigo-700 bg-white rounded-lg border border-indigo-700 border-solid">
          Edit
        </button>
        <button className="p-2 bg-white rounded-lg">
          <img src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/c17b1154-1957-464b-9b37-100c1d0086a3?placeholderIfAbsent=true" alt="More options" className="object-contain w-8 h-8" />
        </button>
      </div>
    </article>
  );
};
