import disney from "../assets/disney.png";
import pixar from "../assets/pixar.png";
import marvel from "../assets/marvel.png";
import starwar from "../assets/starwar.png";
import nationalG from "../assets/nationalG.png";

import disneyV from "../assets/disney.mp4";
import pixarV from "../assets/pixar.mp4";
import marvelV from "../assets/marvel.mp4";
import starwarV from "../assets/star-wars.mp4";
import nationalGV from "../assets/national-geographic.mp4";

function ProductionHouse() {
  const productionHouseList = [
    { id: 1, image: disney, video: disneyV },
    { id: 2, image: pixar, video: pixarV },
    { id: 3, image: marvel, video: marvelV },
    { id: 4, image: starwar, video: starwarV },
    { id: 5, image: nationalG, video: nationalGV },
  ];

  return (
    <div className="flex gap-2 md:gap-5 pt-2 pb-5 px-5 md:px-16">
      {productionHouseList.map((productionHouse, index) => (
        <div
          key={`productionHouse-${index}`}
          className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800"
        >
          <img
            src={productionHouse.image}
            className="w-full z-[1] opacity-100"
          />
          <video
            autoPlay
            loop
            playsInline
            muted
            src={productionHouse.video}
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
