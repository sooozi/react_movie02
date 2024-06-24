import useMovies from '../../hooks/useMovies';
import { MoviePropTypes } from './MoviePropTypes';

const Movie = () => {
    const { movies, loading, error } = useMovies();

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

  return (
      <ul className="movie_wrap">
        {movies.map(movie => (
            <li key={movie.id}>
                <h2>{movie.title}</h2>
                <img src={movie.medium_cover_image} alt="" />
                <p>{movie.summary}</p>
            </li>
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