import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Image_Base_Url = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(function () {
    GlobalApi.getTrending.then((res) => {
      console.log(res);
      setMovieList(res.data.results);
    });
  }, []);

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 108;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 108;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[40px] absolute mx-6 mt-[175px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[40px] absolute mx-6 mt-[175px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((movie, index) => (
          <img
            key={`${movie.backdrop_path}-${index}`}
            src={Image_Base_Url + movie.backdrop_path}
            className="min-w-full md:h-[350px] object-cover 
            object-left-top mr-5 rounded-md hover:border-[2px]
            border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
