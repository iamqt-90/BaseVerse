"use client";
import * as React from "react";
import { NavigationBar } from "./NavigationBar";
import { HeroSection } from "./HeroSection";
import { GallerySection } from "./GallerySection";

function HomePage() {
  return (
    <main className="flex flex-col pb-20 w-full max-md:max-w-full">
      <NavigationBar />
      <HeroSection />
      <GallerySection />
    </main>
  );
}

export default HomePage;
