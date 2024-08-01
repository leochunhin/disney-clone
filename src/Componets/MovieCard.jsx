const Image_Base_Url = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <>
      <img
        src={Image_Base_Url + movie.poster_path}
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in"
      />
    </>
  );
}

export default MovieCard;
