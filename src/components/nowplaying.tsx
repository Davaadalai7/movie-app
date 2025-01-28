import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import React, { useEffect,useState } from "react";

import Autoplay from "embla-carousel-autoplay";

type Movie = {
    original_title: string
    id: number
    poster_path: string
}

export const NowPlaying = () => {

    const [movies, setMovies] = useState<Movie[]>([])

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true }));

        const apiKey = "api_key=db430a8098715f8fab36009f57dff9fb"
        const baseUrl = "https://api.themoviedb.org/3"
        const mainUrl =    baseUrl + "/movie/now_playing?language=en-US&page=1&" + apiKey


const getMovies = async () => {
try{
    const response = await fetch(mainUrl)
    const result = await response.json()
    const movies = result.results
    setMovies(movies)

}
catch (error) {
    console.log(error)
}
}

useEffect(()=> {
    getMovies()
},[])

console.log(movies)
       

    return (

        <Carousel
plugins={[plugin.current]}
className="w-full max-w-xs"
onMouseEnter={plugin.current.stop}
onMouseLeave={plugin.current.reset}
>
<CarouselContent>
    {movies.map((movie) => (
        <CarouselItem key={movie.id} className="w-[1280px]">
            <div className="p-1">
                <Card>
                    <CardContent className="flex items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                            {
                            <div>
                            <img 
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}>
                            
                            
                            </img>

                            <div>{movie.original_title}</div>
                            </div>
                            
                            }
                        </span>
                    </CardContent>
                </Card>
            </div>
        </CarouselItem>
    ))}
</CarouselContent>
<CarouselPrevious />
<CarouselNext />
</Carousel>

    )
}

export default NowPlaying

