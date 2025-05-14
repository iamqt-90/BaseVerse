"use client";

import * as React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-3/12 max-md:w-full">
      <div className="max-md:mt-9">
        <section className="flex flex-col justify-center px-7 py-7 text-base bg-violet-50 rounded-2xl border border-blue-50 border-solid shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
          <input
            type="search"
            placeholder="Search dreams..."
            className="px-5 py-5 bg-white rounded-xl border border-indigo-100 border-solid shadow-[0px_2px_4px_rgba(0,0,0,0.02)] text-neutral-400"
          />
        </section>

        <section className="flex flex-col px-7 py-7 mt-7 text-base text-indigo-700 bg-violet-50 rounded-2xl border border-blue-50 border-solid shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
          <h2 className="self-start text-sm font-semibold text-stone-500">
            FILTER BY TYPE
          </h2>
          <button className="px-5 pt-3.5 pb-7 mt-8 bg-purple-300 rounded-xl text-left">
            Audio Dreams
          </button>
          <button className="px-5 pt-3.5 pb-7 mt-3 bg-purple-300 rounded-xl text-left">
            Text Dreams
          </button>
          <button className="px-5 pt-3.5 pb-7 mt-3.5 bg-purple-300 rounded-xl text-left">
            Sketch Dreams
          </button>
        </section>

        <section className="flex flex-col px-7 py-7 mt-7 w-full bg-violet-50 rounded-2xl border border-blue-50 border-solid shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
          <h2 className="self-start text-sm font-semibold text-stone-500">
            SORT BY
          </h2>
          <button className="flex gap-5 justify-between px-4 py-5 mt-7 text-base text-black bg-purple-300 rounded-xl">
            <span>Newest First</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/26e1be2b2eda92a2ea231dde741d9e362541d438?placeholderIfAbsent=true"
              alt="Sort direction"
              className="object-contain shrink-0 self-start mt-1 w-3.5 aspect-[1.08]"
            />
          </button>
        </section>
      </div>
    </aside>
  );
};
