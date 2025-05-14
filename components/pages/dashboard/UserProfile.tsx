"use client";

import * as React from "react";
import { StatCard } from "./StatCard";

export const UserProfile: React.FC = () => {
  return (
    <section className="flex flex-col self-center px-9 py-9 mt-6 w-full bg-purple-300 rounded-2xl border border-blue-50 border-solid max-w-[1304px] shadow-[0px_5px_14px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-7 self-start">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/557cd37db945b51e06d9200a05f32610556f24be?placeholderIfAbsent=true"
          alt="Profile"
          className="object-contain shrink-0 my-auto max-w-full aspect-[1.01] rounded-[30388866px] w-[136px]"
        />
        <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit max-md:max-w-full">
          <h2 className="text-3xl font-semibold leading-normal text-zinc-900">
            Sam Jam
          </h2>
          <p className="self-stretch mt-2.5 text-lg text-neutral-700 max-md:max-w-full">
            Explorer of dreams and collector of magical moments. Join me on this
            journey through the dreamscape.
          </p>
          <button className="px-7 py-3.5 mt-5 text-base font-medium text-center text-white rounded-2xl border border-black border-solid bg-indigo-950 shadow-[0px_5px_14px_rgba(67,24,209,0.2)] max-md:px-5">
            Start Dreaming
          </button>
        </div>
      </div>

      <div className="mt-9 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[33%] max-md:ml-0 max-md:w-full">
            <StatCard value="42" label="Dreams Created" />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <StatCard value="156" label="Dreams Bookmarked" />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <StatCard value="890" label="Dream Tokens" />
          </div>
        </div>
      </div>
    </section>
  );
};
