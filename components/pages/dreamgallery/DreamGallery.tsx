import * as React from "react";
import { DreamCard } from "./DreamCard";

const dreamData = [
  {
    title: "Flying Over Mountains",
    date: "2024-02-15",
    description: "Soaring through misty peaks at dawn, feeling weightless and free",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/6256edd8-d427-4d81-8906-8a503bc2a607?placeholderIfAbsent=true",
    iconBgColor: "bg-blue-50"
  },
  {
    title: "Ocean Depths",
    date: "2024-02-14",
    description: "Exploring luminescent caves beneath the sea, discovering ancient ruins",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/6b74288c-2ef8-4c71-bcb8-b0c937163953?placeholderIfAbsent=true",
    iconBgColor: "bg-rose-50"
  },
  {
    title: "Crystal Garden",
    date: "2024-02-13",
    description: "Walking through a garden where flowers were made of pure crystal",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/b7c1e465-d3e6-471d-8c36-8f40999bf1d2?placeholderIfAbsent=true",
    iconBgColor: "bg-green-50"
  },
  {
    title: "Time Travel",
    date: "2024-02-12",
    description: "Found myself in ancient Egypt, watching the pyramids being built",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/406b3121-9f11-4ad7-ac40-fd8bd5998e80?placeholderIfAbsent=true",
    iconBgColor: "bg-rose-50"
  },
  {
    title: "Starship Journey",
    date: "2024-02-11",
    description: "Piloting a vessel through a nebula of swirling colors",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/b4d11a3d-3700-44d0-b356-fd434c4af4b1?placeholderIfAbsent=true",
    iconBgColor: "bg-blue-50"
  },
  {
    title: "Forest of Whispers",
    date: "2024-02-10",
    description: "Trees that communicated through glowing symbols",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/07599ec7-d937-411e-8c36-37de738a91ba?placeholderIfAbsent=true",
    iconBgColor: "bg-green-50"
  },
  {
    title: "Desert Oasis",
    date: "2024-02-09",
    description: "Found a magical pool of water surrounded by floating crystals",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/13a188d4-8e4c-42fc-a7f6-7b6dc237921c?placeholderIfAbsent=true",
    iconBgColor: "bg-rose-50"
  },
  {
    title: "Cloud City",
    date: "2024-02-08",
    description: "Walking through a city built on clouds with rainbow bridges",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/2b2c3de2-45d7-47d8-adb5-3c77278ca073?placeholderIfAbsent=true",
    iconBgColor: "bg-green-50"
  },
  {
    title: "Underwater Concert",
    date: "2024-02-07",
    description: "Listening to whale songs in an underwater amphitheater",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/40761db2-027d-49de-8158-4d848bdc6f86?placeholderIfAbsent=true",
    iconBgColor: "bg-blue-50"
  }
];

export const DreamGallery: React.FC = () => {
  return (
    <main className="ml-5 w-9/12 max-md:ml-0 max-md:w-full">
      <div className="w-full max-md:mt-9 max-md:max-w-full">
        <header className="flex flex-wrap gap-5 justify-between w-full text-white max-md:max-w-full">
          <h2 className="self-start text-2xl font-semibold">Dream Gallery</h2>
          <button className="flex gap-5 px-7 py-3.5 text-base text-center bg-indigo-800 rounded-xl shadow-[0px_4px_12px_rgba(67,24,209,0.2)]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/714335293b1cf60cf1a76d9896a345149e646472?placeholderIfAbsent=true"
              alt="New entry"
              className="object-contain shrink-0 self-start aspect-[1.1] w-[23px]"
            />
            <span>New Dream Entry</span>
          </button>
        </header>

        <div className="grid grid-cols-3 gap-5 mt-7 max-md:grid-cols-1">
          {dreamData.map((dream, index) => (
            <DreamCard
              key={index}
              title={dream.title}
              date={dream.date}
              description={dream.description}
              iconSrc={dream.iconSrc}
              iconBgColor={dream.iconBgColor}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
