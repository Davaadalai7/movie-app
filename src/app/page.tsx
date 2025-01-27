import MovieCard from "@/components/movie-card";
import { Button } from "@/components/ui/button";

export default function Home() {

        return (
            <div>
                <Button>click</Button>
                <MovieCard title="The Dark Knight" imdbRating={9.0} image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug&psig=AOvVaw2JYVAVxPf-ka7tiCbjkNQS&ust=1738056072860000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLjOhcjJlYsDFQAAAAAdAAAAABAE" />
            </div>
        );
    
}
