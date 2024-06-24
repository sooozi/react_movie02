import { useParams } from 'react-router-dom';
import useMovies from '../hooks/useMovies';

const Detail = () => {
    const { id } = useParams(); // URL에서 파라미터(id) 확인
    const { movies, loading, error } = useMovies();
    const movie = movies.find((movie) => movie.id === parseInt(id as string));

    if (loading) { //로딩 노출 시 더 좋은 방법이 있는지?
        return <div>로딩 중...</div>;
    }

    if (error) { //에러 노출 시 더 좋은 방법이 있는지?
        return <div>{error}</div>;
    }

    return (
        <ul>
            <li key={movie.id}>
                <h2>{movie.title}</h2>
                <img src={movie.medium_cover_image} alt={movie.title} />
                <p>{movie.summary}</p>
            </li>
        </ul>
    );
};

export default Detail;
