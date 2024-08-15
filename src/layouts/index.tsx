import { Navbar } from '../components';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <main className="h-full flex flex-col">
            <Navbar />
            <section className="flex-grow w-full p-3 pt-5 sm:p-10 bg-gray-800 overflow-auto">
                <Outlet />
            </section>
        </main>
    );
};

export default Layout;
