"use client";
import React from 'react';

interface Timestamp {
  time: string;
  description: string;
}

interface AudioPlayerProps {
  timestamps: Timestamp[];
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ timestamps }) => {
  return (
    <section className="flex flex-col items-start self-stretch px-7 py-9 mt-7 w-full text-sm rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 self-stretch w-full max-md:mr-2 max-md:max-w-full">
        <div className="flex flex-1 gap-3.5 text-stone-500">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/b77d33cf-1003-4822-8d3b-74fd8972209c?placeholderIfAbsent=true"
            className="object-contain shrink-0 rounded-lg aspect-[0.98] bg-indigo-950 h-[49px] w-[49px]"
            alt="Audio player"
          />
          <span className="self-start mt-3">00:00 / 2:30</span>
        </div>
        <div className="flex flex-1 gap-4 my-auto text-center text-indigo-700">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/6f8878fca8e91bea3da8ca0ac3c2ebcb08a34aba?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-start mt-2 aspect-square w-[11px]"
            alt="Add timestamp icon"
          />
          <button className="basis-auto">Add Timestamp</button>
        </div>
      </div>
      <div className="flex shrink-0 self-stretch mt-5 bg-indigo-100 rounded-sm h-[5px] max-md:max-w-full" />
      <ul className="w-full mt-5 space-y-5">
        {timestamps.map((stamp, index) => (
          <li key={index} className="flex gap-5">
            <time className="text-indigo-700">{stamp.time}</time>
            <span className="basis-auto text-stone-500">{stamp.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
