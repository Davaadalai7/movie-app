"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import StarBig from "@/components/imdb-star-big";
import { Play, X } from "lucide-react";
import SimilarMovie from "@/components/similiar";

type Genre = {
  id: number;
  name: string;
};

type MovieDetail = {
  original_title: string;
  genres: Genre[];
  release_date: string;
  adult: string;
  runtime: number;
  overview: string;
  vote_average: number;
  vote_count: number;
  poster_path: string | null;
  backdrop_path: string | null;
};

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null); // Store trailer URL
  const [trailerDuration, setTrailerDuration] = useState<number | null>(null); // Store trailer duration
  const [isDialogOpen, setIsDialogOpen] = useState(false); // For handling dialog state

  const apiKey = "db430a8098715f8fab36009f57dff9fb";
  const baseUrl = "https://api.themoviedb.org/3";

  useEffect(() => {
    const getMovie = async () => {
      // Fetch the movie details
      const response = await axios.get(
        `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`
      );
      setMovie(response.data);
    };
    getMovie();

    // Fetch the trailer for the movie
    const getMovieTrailer = async () => {
      const trailerResponse = await axios.get(
        `${baseUrl}/movie/${id}/videos?api_key=${apiKey}&language=en-US`
      );
      const trailers = trailerResponse.data.results;
      if (trailers.length > 0) {
        const trailer = trailers.find(
          (trailer: any) => trailer.type === "Trailer"
        );
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
          setTrailerDuration(120);
        }
      }
    };
    getMovieTrailer();
  }, [id]);

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const formatDuration = (seconds: number | null) => {
    if (seconds === null) return "N/A";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="space-y-8 mx-auto w-full max-w-[1100px]">
        <div className="mt-8 mb-4 px-5 flex justify-between lg:mt-[52px] lg:mb-6 lg:px-0">
          <div className="space-y-1">
            <div className="break-words text-2xl font-bold w-52 lg:w-fit lg:text-4xl">
              {movie.original_title}
            </div>
            <div className="text-sm lg:text-lg">
              {movie.release_date}
              {movie.adult === "true" ? " · NC · " : " · PG · "}
              {formatRuntime(movie.runtime)}
            </div>
          </div>
          <div className="text-xs">
            <h5 className="hidden lg:block">Rating</h5>
            <div className="flex items-center py-[2px] gap-x-1">
              <StarBig/>
              <div className="">
                <span className="text-foreground text-black text-sm dark:text-white">
                  {parseFloat(movie?.vote_average?.toFixed(1))}
                </span>
                <span className="text-muted-foreground text-xs">/10</span>
                <p className="text-muted-foreground">{movie.vote_count}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-x-8 mb-8">
          <div className="overflow-hidden relative hidden lg:block w-[290px] h-[428px] rounded">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>
          <div className="relative overflow-hidden w-[375px] lg:w-[760px] h-[211px] lg:h-[428px] lg:rounded">
            <div className="bg-black/30 absolute h-full w-full " />
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.original_title}
              className="w-full h-full object-cover"
            />

            {/* Play Button */}
            <div className="absolute left-5 bottom-5 lg:left-8 lg:bottom-8 flex items-center gap-4">
              <button
                className="p-4 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-all"
                onClick={openDialog}
                aria-label="Play Trailer"
              >
                <Play className="w-4 h-4 dark: fill-black text-white" />
              </button>
              {/* Text and Trailer Duration */}
              {trailerDuration !== null && (
                <span className="text-white text-sm">
                  {`Trailer Duration: ${formatDuration(trailerDuration)}`}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="px-5 lg:px-0">
          <div className="flex flex-wrap gap-3 mb-5">
            {movie.genres?.map((genre) => (
              <div
                key={genre.id}
                className="inline-flex items-center border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground rounded-full text-xs"
              >
                {genre.name}
              </div>
            ))}
          </div>

          <div>
            <p className="text-base">{movie.overview}</p>
          </div>
        </div>

        {/* Modal/Dialog for ReactPlayer */}
        {isDialogOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/50">
            <div className="rounded max-w-4xl w-full">
              <div className="relative">
                <ReactPlayer
                  url={trailerUrl}
                  playing
                  controls
                  width="fit"
                  height="50vh"
                />
                <button
                  className="absolute right-2 top-1 text-3xl text-white"
                  onClick={closeDialog}
                >
                  &times;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <SimilarMovie id={id as string}/>
      <Footer />
    </div>
  );
};

export default Detail;
