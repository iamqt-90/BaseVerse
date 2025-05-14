"use client";

import * as React from "react";

interface Tab {
  label: string;
  isActive?: boolean;
}

interface TabNavigationProps {
  tabs: Tab[];
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ tabs }) => {
  return (
    <nav className="flex gap-5 justify-between mt-16 ml-7 max-w-full text-base font-medium text-center text-stone-500 w-[372px] max-md:mt-10 max-md:ml-2.5">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          className={tab.isActive ? "text-indigo-700" : ""}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};
