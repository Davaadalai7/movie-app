import { Card, CardContent } from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import React, { useEffect, useState } from "react";

import Autoplay from "embla-carousel-autoplay";

type Movie = {
    original_title: string;
    id: number;
    poster_path: string;
    backdrop_path: string;
};

export const NowPlaying = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const apiKey = "api_key=db430a8098715f8fab36009f57dff9fb";
    const baseUrl = "https://api.themoviedb.org/3";
    const mainUrl =
        baseUrl + "/movie/now_playing?language=en-US&page=1&" + apiKey;

    const getMovies = async () => {
        try {
            const response = await fetch(mainUrl);
            const result = await response.json();
            const movies = result.results;
            setMovies(movies);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {movies.map((movie) => (
                    <CarouselItem key={movie.id} className="w-full">
                        <div className="p-0">
                            <Card>
                                <CardContent className="flex items-center justify-center p-0 w-full">
                                    <span className="text-4xl font-semibold w-full">
                                        {
                                            <div className="w-full h-full relative">
                                                <img
                                                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                                    alt={movie.original_title}
                                                    className="w-full h-[600px] object-cover"
                                                />
                                                <div>
                                                    {movie.original_title}
                                                </div>
                                            </div>
                                        }
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[50px]"/>
            <CarouselNext className="absolute right-[50px]"/>
        </Carousel>
    );
};

export default NowPlaying;
