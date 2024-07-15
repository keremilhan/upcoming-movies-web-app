import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const useSearchTerm = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const searchTermParam = searchParams.get('search') || '';
    const [searchTerm, setSearchTerm] = useState(searchTermParam);
    const debouncedSearchTerm = useDebounce(searchTerm);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setSearchParams({ search: debouncedSearchTerm });
        } else {
            setSearchParams({});
        }
    }, [debouncedSearchTerm, setSearchParams]);

    useEffect(() => {
        if (location.pathname === '/' && !searchParams.get('search')) {
            setSearchTerm('');
            setSearchParams({});
        }
    }, [location.pathname, searchParams, setSearchParams]);

    return { searchTerm, setSearchTerm, debouncedSearchTerm };
};

export default useSearchTerm;
