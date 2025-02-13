import React from "react";

type MovieDetailsProps = {
  movie: {
    title: string;
    release_date: string;
    overview: string;
    imdb_id: string;
    poster_path: string;
    genres: { name: string }[];
    runtime: number;
    vote_average: number;
  };
};

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-2xl font-semibold">{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie Poster"
          className="my-4"
        />
        <p className="text-gray-600">{movie.overview}</p>
        <p className="mt-2">
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p className="mt-2">
          <strong>Runtime:</strong> {formatRuntime(movie.runtime)}
        </p>
        <p className="mt-2">
          <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className="mt-2">
          <strong>Rating:</strong> {movie.vote_average}/10
        </p>
        <button
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md"
          onClick={() => window.history.back()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
