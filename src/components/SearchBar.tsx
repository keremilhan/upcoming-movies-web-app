import React from 'react';
import { FaTimes } from 'react-icons/fa';

const SearchBar: React.FC<{ searchTerm: string; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; onClear: () => void }> = ({ searchTerm, onChange, onClear }) => {
    return (
        <div className="flex justify-center pb-6">
            <div className="relative">
                <input type="text" placeholder="Search for a movie..." value={searchTerm} onChange={onChange} className="border border-gray-300 rounded-lg p-2 w-80 pr-10" />
                {searchTerm && (
                    <button type="button" onClick={onClear} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800">
                        <FaTimes size={20} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
