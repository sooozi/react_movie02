import { useEffect, useState } from 'react';
import { getMovie } from '../apis/movie.api';

const useMovieById = (id: number) => {
    const [movie, setMovie] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movieData = await getMovie();
                setMovie(movieData);
            } catch (error) {
                setError('영화 데이터를 가져오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    return { movie, loading, error };
};

export default useMovieById;