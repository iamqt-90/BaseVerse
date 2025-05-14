"use client";

import * as React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { DreamGallery } from "./DreamGallery";

export const GalleryPage: React.FC = () => {
  return (
    <div className="overflow-hidden bg-slate-950">
      <div className="flex flex-col pb-7 w-full bg-slate-950 max-md:max-w-full">
        <Header />
        <div className="self-center mt-6 w-full max-w-[1390px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <Sidebar />
            <DreamGallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
