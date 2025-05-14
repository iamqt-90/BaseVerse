import * as React from "react";

export const SummaryPanel: React.FC = () => {
  return (
    <aside className="flex flex-col grow px-9 pt-9 pb-72 w-full bg-purple-300 rounded-3xl shadow-[0px_8px_32px_rgba(0,0,0,0.05)] max-md:px-5 max-md:pb-24 max-md:mt-9 max-md:max-w-full">
      <h2 className="self-start text-xl font-semibold text-zinc-900">
        Summary
      </h2>
      <p className="px-14 pt-56 pb-44 mt-9 text-base bg-violet-50 rounded-2xl text-stone-500 max-md:px-5 max-md:pt-24 max-md:pb-28">
        Save your entry to see summary
      </p>
    </aside>
  );
};
