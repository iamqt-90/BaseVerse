"use client";
import * as React from "react";
import { Header } from "./Header";
import { Canvas } from "./Canvas";
import { SummaryPanel } from "./SummaryPanel";

function DreamingPage() {
  return (
    <main className="flex flex-col pb-10 w-full bg-slate-950 max-md:max-w-full">
      <Header />
      <div className="self-center mt-10 w-full max-w-[1368px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="w-[66%] max-md:ml-0 max-md:w-full">
            <Canvas />
          </section>
          <section className="ml-5 w-[34%] max-md:ml-0 max-md:w-full">
            <SummaryPanel />
          </section>
        </div>
      </div>
    </main>
  );
}

export default DreamingPage;
