import React from 'react';

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <p className="italic break-words"> {message}</p>
        </div>
    );
};

export default ErrorMessage;
