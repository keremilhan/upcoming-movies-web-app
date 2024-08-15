import { useGenres, useUpcomingMovies, useSearchTerm } from '../hooks';
import { useCallback, useRef } from 'react';
import { SearchBar, MovieList, Loading, ErrorMessage } from '../components';

const Home: React.FC = () => {
    const { searchTerm, setSearchTerm, debouncedSearchTerm } = useSearchTerm();

    const { data: genresData, error: genresError } = useGenres();
    const { data, error, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useUpcomingMovies(debouncedSearchTerm);

    const observer = useRef<IntersectionObserver | null>(null);
    const lastMovieElementRef = useCallback(
        (node: HTMLAnchorElement) => {
            if (isLoading || isFetchingNextPage) return;

            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, isFetchingNextPage, fetchNextPage, hasNextPage]
    );

    const getGenreNames = (genreIds: number[]) => {
        return genreIds.map(id => {
            const genre = genresData?.find(g => g.id === id);
            return genre ? genre.name : '';
        });
    };
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const handleClearSearch = () => {
        setSearchTerm('');
    };

    if (error) return <ErrorMessage message={`Error loading data: ${error.message}`} />;
    if (genresError) return <ErrorMessage message={`Error loading genres: ${genresError.message}`} />;

    return (
        <div className="w-full h-full flex flex-col">
            <SearchBar searchTerm={searchTerm} onChange={handleSearch} onClear={handleClearSearch} />
            <div className="overflow-auto h-full flex-grow">
                {isLoading ? <Loading /> : <MovieList data={data} getGenreNames={getGenreNames} lastMovieElementRef={lastMovieElementRef} />}
                {isFetchingNextPage && <Loading />}
            </div>
        </div>
    );
};

export default Home;
