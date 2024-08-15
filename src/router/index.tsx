import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from '../layouts';
import { Error, Home, ComingSoon, Details } from '../pages';

const comingSoonPaths = ['movies', 'tv-series', 'cartoons', 'auth'];

const comingSoonRoutes: RouteObject[] = comingSoonPaths.map(path => ({
    path,
    element: <ComingSoon />,
}));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'movie/:id',
                element: <Details />,
            },
            ...comingSoonRoutes,
        ],
    },
]);
