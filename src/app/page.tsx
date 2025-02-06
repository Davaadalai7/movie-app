"use client";

import Upcoming from "@/components/upcoming";
import { useTheme } from "next-themes";
import React from "react";
import NowPlaying from "@/components/nowplaying";
import { Header } from "@/components/header";
import Popular from "@/components/popular";
import TopRated from "@/components/top-rated";
import Footer from "@/components/footer";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-black">
      <div className="sticky top-0 z-10 bg-white dark:bg-black">
        <Header />
      </div>
      <div className="flex justify-center">
        <NowPlaying />
      </div>
      <div>
        <Upcoming />
        <Popular />
        <TopRated />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <ModeToggle />
    </div>
  );
}
