import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/functions';
import { MovieCardProps } from '../types/common';

const MovieCard = React.forwardRef<HTMLAnchorElement, MovieCardProps>((props, ref) => {
    const { poster_path, title, release_date, id, genres } = props;
    const placeholderImage = `https://picsum.photos/id/${id % 100}/500/750`;
    const formattedDate = formatDate(release_date);

    return (
        <Link
            to={`/movie/${id}`}
            ref={ref}
            className="relative group w-72 bg-gray-100 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all ease-in-out h-full pb-2 transform hover:shadow-xl hover:scale-105"
        >
            <div className="relative w-full h-2/3 overflow-hidden">
                <img className="w-full h-96 object-cover" src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : placeholderImage} alt={title} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black flex flex-col justify-center items-center gap-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {genres.map((genre: string, index: number) => (
                        <p key={index} className="text-white text-lg font-bold">
                            {genre}
                        </p>
                    ))}
                </div>
            </div>
            <p className="font-bold text-xl my-2 text-center truncate px-4">{title}</p>
            <p className="text-md text-center font-semibold">{formattedDate}</p>
        </Link>
    );
});

export default MovieCard;
