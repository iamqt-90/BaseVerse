"use client";
import React from 'react';
import { Header } from './Header';
import { DreamContent } from './DreamContent';
import { DreamDetails } from './DreamDetails';

const NFTPageForAudio = () => {
  const timestamps = [
    { time: "0:15", description: "Initial takeoff sensation" },
    { time: "0:45", description: "Mountain peak encounter" },
    { time: "1:30", description: "Wind current description" }
  ];

  const details = [
    { label: "Dream Type", value: "Audio Recording" },
    { label: "Duration", value: "2:30" },
    { label: "Mood", value: "Peaceful" },
    { label: "Lucidity", value: "Semi-lucid" }
  ];

  const description = `Soaring through misty peaks at dawn, feeling weightless and free as I glided between ancient mountain ranges. The air was crisp and clear, carrying whispers of ancient stories through the clouds. The mountains stretched endlessly beneath me, their snow-capped peaks glowing in the early morning light. I could feel every subtle air current, every shift in the wind, as if the sky itself was teaching me how to fly.`;

  return (
    <main className="overflow-hidden px-16 pt-12 pb-36 bg-slate-950 max-md:px-5 max-md:pb-24">
      <Header date="Thursday, February 15, 2024" />

      <div className="mt-9 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[73%] max-md:ml-0 max-md:w-full">
            <DreamContent
              title="Flying Over Mountains"
              tags={["flying", "mountains", "freedom", "nature"]}
              description={description}
              timestamps={timestamps}
            />
          </div>

          <div className="ml-5 w-[27%] max-md:ml-0 max-md:w-full">
            <DreamDetails
              details={details}
              summary="A vivid flying dream featuring mountain landscapes and sensations of freedom"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NFTPageForAudio;
