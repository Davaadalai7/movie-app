"use client";

import { useEffect, useState } from "react";
import StarIcon from "@/components/imdb-star";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
}

type ApiResponse = {
  results: Movie[];
}

const TopRatedPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const apiKey = "api_key=db430a8098715f8fab36009f57dff9fb";
  const baseUrl = "https://api.themoviedb.org/3";
  const tobot = `${baseUrl}/movie/top_rated?language=en-US&page=${currentPage}&${apiKey}`;

  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(tobot);
      const result: ApiResponse = await response.json();
      setMovies(result.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div>
        <Header/>
    <div className="py-8 lg:py-13 mt-8 lg:space-y-13">
      <div className="space-y-8 mx-auto w-full max-w-[1100px]">
        <h3 className="text-foreground text-2xl font-semibold">
          Top Rated Movies
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-5 lg:gap-8 items-center justify-center p-4 md:p-0">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group w-full overflow-hidden rounded-lg bg-secondary space-y-1"
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
        <div className="mx-auto w-full flex justify-end">
          <div className="flex flex-row items-center gap-1  ">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" onClick={handlePreviousPage} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">{currentPage}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" onClick={handleNextPage} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default TopRatedPage;
