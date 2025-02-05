"use client";

import MovieCard from "@/components/movie-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Upcoming from "@/components/upcoming";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/movielogo";
import { Select } from "@/components/ui/select";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import NowPlaying from "@/components/nowplaying";
import { Header } from "@/components/header";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-black">
   <div>
      <Header/>
   </div>
      <div className="flex justify-center mt-[30]">
        <NowPlaying />
      </div>
      <Upcoming/>
   
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
