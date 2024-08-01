import genres from "../Constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div>
      {genres.map(
        (genre, index) =>
          index <= 4 && (
            <div key={`genre-${genre.id}`} className="p-1 px-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{genre.name}</h2>
              <MovieList genreId={genre.id} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
