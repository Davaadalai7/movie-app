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

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-black">
      <div className="flex justify-center w-full">
        <div className="flex justify-between w-[1280] max-width-[1280px] h-[60] items-center">
          <div>
            <Logo />
          </div>
          <div>
            <Select />
            <Input />
          </div>
          <div className="relative hidden lg:flex items-center gap-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
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
      {/* Other components like Carousel or MovieCard can go here */}
      <ModeToggle />
    </div>
  );
}
