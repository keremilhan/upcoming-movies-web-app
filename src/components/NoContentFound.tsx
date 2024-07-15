const NoMoviesFound: React.FC<{ content: string }> = ({ content }) => <div className="w-full text-center text-gray-500">No {content} found matching your search.</div>;

export default NoMoviesFound;
