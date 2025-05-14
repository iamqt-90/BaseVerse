"use client";

import * as React from "react";
import { DashboardHeader } from "./DashboardHeader";
import { UserProfile } from "./UserProfile";
import { TabNavigation } from "./TabNavigation";
import { DreamCard } from "./DreamCard";

const UserDashboard: React.FC = () => {
  const tabs = [
    { label: "My Dreams", isActive: true },
    { label: "Bookmarked", isActive: false },
    { label: "Drafts", isActive: false },
  ];

  return (
    <main className="overflow-hidden bg-white">
      <div className="flex flex-col pb-20 w-full bg-slate-950 max-md:max-w-full">
        <DashboardHeader />
        <UserProfile />

        <section className="flex flex-col self-center px-9 py-9 mt-6 w-full bg-purple-300 rounded-2xl border border-blue-50 border-solid max-w-[1304px] shadow-[0px_5px_14px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
          <TabNavigation tabs={tabs} />

          <div className="mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[33%] max-md:ml-0 max-md:w-full">
                <DreamCard
                  title="Flying Over Mountains"
                  description="Soaring through misty peaks at dawn, feeling weightless and free"
                  colorClass="bg-blue-50"
                />
              </div>
              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <DreamCard
                  title="Crystal Garden"
                  description="Walking through a garden where flowers were made of pure crystal"
                  colorClass="bg-rose-50"
                />
              </div>
              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <DreamCard
                  title="Ocean Depths"
                  description="Exploring luminescent caves beneath the sea, discovering ancient ruins"
                  colorClass="bg-green-50"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UserDashboard;
