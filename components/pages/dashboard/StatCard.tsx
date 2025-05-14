"use client";

import * as React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <article className="flex flex-col grow items-start py-7 pr-20 pl-7 w-full bg-violet-50 rounded-2xl border border-blue-50 border-solid max-md:px-5 max-md:mt-7">
      <h3 className="text-4xl font-semibold leading-normal text-zinc-900">
        {value}
      </h3>
      <p className="mt-2.5 text-base text-stone-500">{label}</p>
    </article>
  );
};
