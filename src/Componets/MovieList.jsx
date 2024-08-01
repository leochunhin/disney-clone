import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";

function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieByGenreId = () => {
      GlobalApi.getMovieByGenreId(genreId).then((res) => {
        setMovieList(res.data.results);
      });
    };
    getMovieByGenreId();
    console.log(import.meta.env.VITE_API_KEY);
  }, []);

  return (
    <div className="flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5">
      {movieList.map((movie, index) => (
        <MovieCard key={`${genreId}-${index}`} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
