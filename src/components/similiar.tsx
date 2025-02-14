"use client";

import { useEffect, useState } from "react";
import StarIcon from "./imdb-star";
import Link from "next/link";
import { useParams } from "next/navigation";

  type Movie = {
    id: number;
    original_title: string;
    poster_path: string;
    vote_average: number;
  };
type ApiResponse = {
  results: Movie[];
};
const apiKey = "api_key=db430a8098715f8fab36009f57dff9fb";
const baseUrl = "https://api.themoviedb.org/3";


const SimilarMovie = ({id}:{id:string}) => {
    console.log(id);
    
  const [movies, setMovies] = useState<Movie[]>([]);
  const params = useParams()
  const tobot = `${baseUrl}/movie/${id}/similar?language=en-US&page=1&${apiKey}`;
  const getSimilarMovie = async () => {
    try {
      // axios
      const response = await fetch(tobot);
      const result: ApiResponse = await response.json();
      console.log(result);
      
      setMovies(result.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getSimilarMovie();
  }, []);

  return (
    <div className="py-8 lg:py-13 mt-8 lg:space-y-13">
      <div className="space-y-8 mx-auto w-full max-w-[1100px]">
        <div className="flex items-center justify-between">
          <h3 className="text-foreground text-2xl font-semibold">More Like This</h3>
          <Link href={`/category/similar/${id}`} className="text-blue-500">
            See More...
          </Link>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-5 lg:gap-8 items-center justify-center p-4 md:p-0">
          {movies?.slice(0, 5).map((movie) => (
            <div
              key={movie.id}
              className="group overflow-hidden rounded-lg bg-secondary space-y-1"
            >
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
              <div className="p-2">
                <div className="flex items-center gap-x-1">
                  <StarIcon />
                  <div className="font-medium">
                    <p>
                      <span className="text-foreground text-sm">
                        {" "}
                        {parseFloat(movie.vote_average.toFixed(1))}
                      </span>
                      <span className="text-muted-foreground text-xs">/10</span>
                    </p>
                  </div>
                </div>
                <h1 className="h-14 overflow-hidden text-elipsis line-clamp-2 text-lg text-foreground">
                  {movie.original_title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarMovie;
