import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { ErrorMessage, Loading } from '../components';
import { useMovieDetails } from '../hooks';
import { formatDate } from '../utils/functions';

const Details: React.FC = () => {
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    const { data, error, isLoading } = useMovieDetails(id!);

    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage message={`Error loading movie details: ${error.message}`} />;

    const { poster_path, title, id: movieId, overview, release_date, genres } = data;

    const genresNames = genres.map(({ name }: { name: string }) => name).join(', ');
    const formattedDate = formatDate(release_date);

    const placeholderImage = `https://picsum.photos/seed/${movieId}/500/750`;

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="max-w-6xl mx-auto p-4 text-gray-100">
            <button onClick={handleBack} className=" hover:text-gray-300 flex items-center mb-4">
                <FaArrowLeft className="mr-2" /> Back{' '}
            </button>
            <div className="flex flex-col md:flex-row">
                <img className="rounded-md" src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : placeholderImage} alt={title} />
                <div className="flex flex-col gap-10 md:ml-4 mt-4 md:mt-0">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold text-white">{title}</h1>
                        <p className="font-light">{overview}</p>
                    </div>
                    <div>
                        <h2 className="text-white">Genre</h2>
                        <p className="font-thin">{genresNames}</p>
                    </div>
                    <div>
                        <h2 className="text-white">Release Date</h2>
                        <p className="font-thin">{formattedDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
