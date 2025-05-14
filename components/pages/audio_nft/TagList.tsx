import React from 'react';

interface TagListProps {
  tags: string[];
}

export const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex gap-2 mt-7 max-w-full text-xs text-indigo-700 whitespace-nowrap">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3.5 pt-1 pb-4 rounded-2xl bg-slate-50"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
