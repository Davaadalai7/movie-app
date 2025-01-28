import { StarIcon } from "lucide-react";
import React from "react";

interface MovieCardProps {
    title: string;
    imdbRating: number;
    image: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, imdbRating, image }) => {
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
