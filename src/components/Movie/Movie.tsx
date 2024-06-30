import { Link } from 'react-router-dom';
import useMovies from '../../hooks/useMovies';
import styled from './Movie.module.css';
import { MoviePropTypes } from './MoviePropTypes';

const Movie = () => {
    const { movies, loading, error } = useMovies();

    if (loading) { //로딩 노출 시 더 좋은 방법이 있는지?
        return <div>로딩 중...</div>;
    }

    if (error) { //에러 노출 시 더 좋은 방법이 있는지?
        return <div>{error}</div>;
    }

    return (
        <ul className={styled.movieWrap}>
            {movies.map(movie => (
                <Link to={`/movie/${movie.id}`}>
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img src={movie.medium_cover_image} alt={movie.title} />
                        <p>{movie.summary}</p>
                    </li>
                </Link>
            ))}
        </ul>
    );
};

Movie.propTypes = MoviePropTypes;

export default Movie;




// function Movie() {
//     return (
//         <div>
//             <h2>title</h2>
//             <p>summary</p>
//             <ul><li></li></ul>
//         </div>
//     )
// }

// export default Movie;