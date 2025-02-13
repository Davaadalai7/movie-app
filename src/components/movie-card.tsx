import StarIcon from "./imdb-star";
import React, { useEffect, useState } from "react";

type MovieCardProps = {
  title: string;
  imdbRating: number;
  image: string;
  id: number;

}

const apiKey = "api_key=db430a8098715f8fab36009f57dff9fb";
const baseUrl = "https://api.themoviedb.org/3";
const mainUrl = baseUrl + "/movie/upcoming?language=en-US&page=1&" + apiKey;

const MovieCard: React.FC<MovieCardProps> = ({ title, imdbRating, image }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const get = async () => {
      const response = await (await fetch(mainUrl)).json();
      setMovies(response.results);
      
      console.log(response.results);
    };

    get();
  }, []);

  return (
    <div className="border-0 border-gray-300 rounded-lg w-64 overflow-hidden text-center mb-5 bg-secondary ">
      <img src={image} />
      <div className="p-2">
        <div className="flex items-center gap-x-1">
          <p className="text-gray-600 text-base flex justify-start">
            <StarIcon /> {imdbRating}
          </p>
        </div>
        <h4 className="h-14 overflow-hidden text-ellipsis line-clamp-2 text-lg text-foreground flex justify-start">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default MovieCard;
