import useMovies from '../hooks/useMovies';

const Detail = () => {
    const { movies, loading, error } = useMovies();

    if (loading) { //로딩 노출 이렇게 하는지?
        return <div>로딩 중...</div>;
    }

    if (error) { //에러 노출 이렇게 하는지?
        return <div>{error}</div>;
    }

  return (
    <div>
      <ul>
        {movies.map(movie => (
            <li key={movie.id}>{movie.id}</li>
        ))}
      </ul>
    </div>
  );
};


export default Detail;