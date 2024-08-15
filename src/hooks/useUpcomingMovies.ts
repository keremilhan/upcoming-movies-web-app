import { useInfiniteQuery, InfiniteQueryObserverResult, QueryFunction } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import { discoverMovieEndPoint } from '../utils/constants/endpoints';
import { MoviesPage, MoviesResponse } from '../types/common';
import { getUpcomingDates } from '../utils/functions';

const { today, threeWeeksLater } = getUpcomingDates();

const fetchUpcomingMovies = async (query = '', pageParam: number): Promise<MoviesPage> => {
    const response = await axiosInstance.get(discoverMovieEndPoint, {
        params: {
            with_text_query: query,
            page: pageParam,
            sort_by: 'popularity.desc',
            'primary_release_date.gte': today,
            'primary_release_date.lte': threeWeeksLater,
        },
    });

    return response.data;
};

const useUpcomingMovies = (query = ''): InfiniteQueryObserverResult<MoviesResponse, Error> => {
    const fetchFunction: QueryFunction<MoviesPage, string[], number> = async ({ pageParam = 1 }) => fetchUpcomingMovies(query, pageParam);
    return useInfiniteQuery({
        queryKey: ['upcomingMovies', query],
        queryFn: fetchFunction,
        initialPageParam: 1,
        getNextPageParam: ({ page, total_pages }: MoviesPage): number | undefined => {
            if (page < total_pages) return page + 1;
            return undefined;
        },
    });
};

export default useUpcomingMovies;
