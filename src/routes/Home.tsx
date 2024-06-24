import useMovies from '../hooks/useMovies';

const Home = () => {
    const { movies, loading, error } = useMovies();

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

  return (
    <div>
      <ul>
        {movies.map(movie => (
            <li key={movie.id}>
                <h2>{movie.title}</h2>
                <img src={movie.medium_cover_image} alt="" />
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;