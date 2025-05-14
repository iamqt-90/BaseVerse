"use client";
import React from 'react';
import { TagList } from './TagList';
import { AudioPlayer } from './AudioPlayer';
import { ActionButton } from './ActionButton';

interface DreamContentProps {
  title: string;
  tags: string[];
  description: string;
  timestamps: Array<{ time: string; description: string; }>;
}

export const DreamContent: React.FC<DreamContentProps> = ({
  title,
  tags,
  description,
  timestamps
}) => {
  return (
    <article className="flex flex-col items-start px-10 py-10 mx-auto w-full bg-white rounded-2xl border border-blue-50 border-solid shadow-[0px_4px_12px_rgba(0,0,0,0.03)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 text-2xl font-semibold text-zinc-900">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/cc20479b-4067-4bf3-81a6-67a1df93095b?placeholderIfAbsent=true"
          className="object-contain shrink-0 bg-blue-50 aspect-square h-[51px] rounded-[26843500px] w-[51px]"
          alt="Dream icon"
        />
        <h1 className="flex-auto self-start">{title}</h1>
      </div>

      <TagList tags={tags} />

      <AudioPlayer timestamps={timestamps} />

      <h2 className="mt-10 text-base font-semibold text-zinc-900">
        Dream Description
      </h2>

      <p className="self-stretch mt-8 text-base leading-6 text-neutral-700 max-md:mr-2.5 max-md:max-w-full">
        {description}
      </p>

      <div className="flex gap-3.5 mt-16 text-sm font-medium text-center max-md:mt-10">
        <ActionButton variant="secondary">Edit Dream</ActionButton>
        <ActionButton variant="danger">Delete Dream</ActionButton>
      </div>
    </article>
  );
};
