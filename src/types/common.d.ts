export interface MovieProps {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export type MovieCardProps = Pick<MovieProps, 'poster_path' | 'title' | 'release_date' | 'id'> & {
    genres: string[];
};

export interface MoviesPage {
    results: MovieProps[];
    page: number;
    total_results: number;
    total_pages: number;
}

export interface MoviesResponse {
    pageParams: number[];
    pages: MoviesPage[];
}

export interface Genre {
    id: number;
    name: string;
}

export interface MovieListProps {
    data: MoviesResponse | undefined;
    getGenreNames: (genreIds: number[]) => string[];
    lastMovieElementRef: React.RefCallback<HTMLAnchorElement>;
}
