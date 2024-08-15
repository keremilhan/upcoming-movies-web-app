import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import { Genre } from '../types/common';
import { movieGenreListEndPoint } from '../utils/constants/endpoints';

const fetchGenres = async (): Promise<Genre[]> => {
    const response = await axiosInstance.get(movieGenreListEndPoint);
    return response.data.genres;
};

const useGenres = (): UseQueryResult<Genre[], Error> => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: fetchGenres,
        staleTime: Infinity,
    });
};

export default useGenres;
