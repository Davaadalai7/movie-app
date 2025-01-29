"use client";

import MovieCard from "@/components/movie-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
                                    <span className="sr-only">
                                        Toggle theme
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                    onClick={() => setTheme("light")}
                                >
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setTheme("dark")}
                                >
                                    Dark
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            {/* <div className="overflow-hidden"> */}
            <div className="flex justify-center">
               <NowPlaying />
                {/* </div> */}
            </div>
            <MovieCard
                title="The Dark Knight"
                imdbRating={9.0}
                image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug&psig=AOvVaw2JYVAVxPf-ka7tiCbjkNQS&ust=1738056072860000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLjOhcjJlYsDFQAAAAAdAAAAABAE"
            />
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
