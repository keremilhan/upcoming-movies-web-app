import React from 'react';

const ComingSoon: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-5 text-center">
            <h1 className="text-6xl sm:text-8xl font-bold text-gray-200">Coming Soon</h1>
            <p className="text-lg text-gray-100">This section is currently under construction.</p>
            <p className="text-lg text-gray-200">Stay tuned for updates!</p>
        </div>
    );
};

export default ComingSoon;
