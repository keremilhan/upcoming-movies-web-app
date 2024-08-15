import { MovieProps, MovieCardProps, MovieListProps } from '../types/common';
import MovieCard from './MovieCard';
import NoContentFound from './NoContentFound';

const MovieList: React.FC<MovieListProps> = ({ data, getGenreNames, lastMovieElementRef }) => (
    <div className="flex flex-wrap pt-10 gap-8 gap-y-8 sm:gap-y-20 justify-center overflow-auto">
        {data?.pages?.flatMap(page => page?.results).length === 0 ? (
            <NoContentFound content="movies" />
        ) : (
            data?.pages.map((page, pageIndex) =>
                page?.results.map((movie: MovieProps, movieIndex: number) => {
                    const { id, poster_path, title, release_date, genre_ids } = movie;
                    const genres = getGenreNames(genre_ids);
                    const movieCardProps: MovieCardProps = {
                        id,
                        poster_path,
                        title,
                        release_date,
                        genres,
                    };
                    if (pageIndex === data.pages.length - 1 && movieIndex === page?.results.length - 1) {
                        return <MovieCard key={movie.id} {...movieCardProps} ref={lastMovieElementRef} />;
                    }
                    return <MovieCard key={movie.id} {...movieCardProps} />;
                })
            )
        )}
    </div>
);

export default MovieList;
