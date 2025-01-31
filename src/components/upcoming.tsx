"use client";

import { useEffect, useState } from "react";

const Upcoming = () => {
  const [movie, setMovie] = useState([]);

  const apiKey = "api_key=db430a8098715f8fab36009f57dff9fb";
  const baseUrl = "https://api.themoviedb.org/3";
  const tobot = `${baseUrl}/movie/upcoming?language=en-US&page=1&${apiKey}`;
  console.log(tobot);

  const getUpcomingMovie = async () => {
    const responce = await fetch(tobot);
    const result = await responce.json();
    const movieUrl = result.results;
    setMovie(movieUrl);
    // console.log(result)
  };

  useEffect(() => {
    getUpcomingMovie();
  }, []);

  console.log(movie);

  return (
    <div className="py-8 lg:py-13 mt-8 lg:space-y-13">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-foreground text-2xl font-semibold">Upcoming</h3>
          <h4> see more .. </h4>
        </div>
        <div className=" grid grid-cols-5 gap-5 lg:gap-8 items-center justify-center">
          {movie.splice(0,10).map((el) => (
            <div key={el.id} className="w-[200px] h-[400px] bg-red-500">
                <div> 
                    <img
                    src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                /> 
                </div>
                <div> 
                    <h1>{el.original_title}</h1>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
