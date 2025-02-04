import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import React, { useEffect, useState } from "react";
import StarIcon from "./imdb-star";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import StarBig from "./imdb-star-big";

type Movie = {
  original_title: string;
  id: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
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

  // console.log(movies);

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
                      <div className="relative">
                        <div className="w-full h-full">
                          <img
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.original_title}
                            className="w-full h-[600px] object-cover"
                          />
                          <div className="p-5 space-y-4 lg:p-0 absolute z-10 inset-0">
                            <div className="static text-foreground lg:absolute lg:top-1/2 lg:left-[140px] lg:-translate-y-1/2 lg:text-white z-10">
                              <div className="flex justify-between lg:flex-col lg:space-y-1">
                                <div>
                                  <h4 className="text-sm font-sans">
                                    Now playing:
                                  </h4>
                                  <h3 className="w-52 text-2xl font-semibold truncate">
                                    {movie.original_title}
                                  </h3>
                                </div>
                                <div className="flex items-center gap-x-1">
                                  <StarBig/>
                                  <p>
                                    <span className="text-foreground text-sm">
                                      {parseFloat(movie.vote_average.toFixed(1))}
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                      /10
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <p className="w-[302px] text-sm font-sans line-clamp-5">
                                {movie.overview}
                              </p>
                              <div className="">
                                <Button>Watch Trailer</Button>
                              </div>
                            </div>
                          </div>
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
      <CarouselPrevious className="absolute left-[50px]" />
      <CarouselNext className="absolute right-[50px]" />
    </Carousel>
  );
};

export default NowPlaying;
