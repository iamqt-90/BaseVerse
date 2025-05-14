"use client";

import { Header } from "./Header";
import { ArtworkCard } from "./ArtworkCard";
import { DetailsSidebar } from "./DetailsSidebar";

export default function SketchNFT() {
  const artworkDetails = {
    technique: "Digital Painting",
    tools: ["Apple Pencil", "Procreate"],
    creationTime: "45 minutes",
    colors: ["#4338CA", "#EEF2FF", "#FBBF24", "#059669"],
  };

  const dreamDetails = {
    timeOfNight: "2:30 AM",
    sleepQuality: "Deep REM",
    dreamSigns: ["floating objects", "cosmic elements", "crystalline structures"],
  };

  const emotions = ["wonder", "serenity", "inspiration"];

  return (
    <div className="overflow-hidden bg-white">
      <main className="px-16 py-10 w-full bg-indigo-50 max-md:px-5 max-md:max-w-full">
        <Header date="Thursday, February 15, 2024" />

        <div className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[73%] max-md:ml-0 max-md:w-full">
              <ArtworkCard
                title="Celestial Garden Vision"
                tags={["celestial", "garden", "floating", "ethereal", "cosmic"]}
                imageSrc="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/8f7b781295d9ddb58507684ae4d9f51996cd26da?placeholderIfAbsent=true"
                description="In this dream, I found myself in a suspended garden where celestial bodies grew like flowers. The planets bloomed on crystalline stems, and cosmic dust formed pathways between floating islands of vegetation. The entire scene was bathed in an otherworldly light that seemed to pulse with the rhythm of the universe."
                interpretation="The floating gardens appear to represent my aspirations and creative growth, while the celestial elements suggest a connection to higher consciousness and universal wisdom. The crystalline structures might symbolize clarity of purpose and spiritual growth."
              />
            </div>

            <div className="ml-5 w-[27%] max-md:ml-0 max-md:w-full">
              <DetailsSidebar
                artworkDetails={artworkDetails}
                dreamDetails={dreamDetails}
                emotions={emotions}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
