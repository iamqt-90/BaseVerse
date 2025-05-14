import React from 'react';

interface DreamDetail {
  label: string;
  value: string;
}

interface DreamDetailsProps {
  details: DreamDetail[];
  summary: string;
}

export const DreamDetails: React.FC<DreamDetailsProps> = ({ details, summary }) => {
  return (
    <aside className="flex flex-col items-start pt-7 pr-16 pb-14 pl-7 w-full text-sm bg-white rounded-2xl border border-blue-50 border-solid shadow-[0px_4px_12px_rgba(0,0,0,0.03)] text-stone-500 max-md:px-5 max-md:mt-10">
      <h2 className="font-semibold">DREAM DETAILS</h2>

      {details.map((detail, index) => (
        <div key={index} className="w-full">
          <h3 className="mt-8 text-xs">{detail.label}</h3>
          <p className="mt-4 text-zinc-900">{detail.value}</p>
        </div>
      ))}

      <h2 className="mt-11 font-semibold max-md:mt-10">DREAM SUMMARY</h2>
      <p className="mt-7 leading-5 text-neutral-700">{summary}</p>
    </aside>
  );
};
