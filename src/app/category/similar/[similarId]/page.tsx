'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
type Movie = {
    id: number;
    original_title: string;
    poster_path: string;
    vote_average: number;
  }

type ApiResponse = {
    results: Movie[];
  }

export default function Home () {
     const { similarId } = useParams();

       const [movies, setMovies] = useState<Movie[]>([]);
       const [currentPage, setCurrentPage] = useState(1);
     
       const apiKey = "api_key=db430a8098715f8fab36009f57dff9fb";
       const baseUrl = "https://api.themoviedb.org/3";
       const tobot = `${baseUrl}/movie/${similarId}/similar?language=en-US&page=1${currentPage}&${apiKey}`;
     
       const getSimilarMovie = async () => {
         try {
           const response = await fetch(tobot);
           const result: ApiResponse = await response.json();
           setMovies(result.results);
         } catch (error) {
           console.error("Error fetching movies:", error);
         }
       };
     
       useEffect(() => {
         getSimilarMovie();
       }, [currentPage]);
    return(
        <div className="bg-red-200">
            <p className="font-bold text-4xl">More like this
            </p>
            
            {
            movies.map((movie)=>{
                return(
                    <p>{movie.original_title}</p>
                )
            })

        }</div>
    )
}