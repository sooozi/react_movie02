import { useEffect, useState } from 'react';
import { getMovie } from '../apis/movie.api';

const useMovies = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movieData = await getMovie();
                setMovies(movieData.movies);
            } catch (error) {
                setError('영화 데이터를 가져오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return { movies, loading, error };
};

export default useMovies;