import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import { movieDetailsEndPoint } from '../utils/constants/endpoints';

const fetchMovieDetails = async (id: string) => {
    const response = await axiosInstance.get(`${movieDetailsEndPoint}/${id}`);
    return response.data;
};

const useMovieDetails = (id: string) => {
    return useQuery({
        queryKey: ['movieDetails', id],
        queryFn: () => fetchMovieDetails(id),
    });
};

export default useMovieDetails;
