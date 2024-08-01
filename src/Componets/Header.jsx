import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import DisneyPlus from "../assets/DisneyPlus.png";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={DisneyPlus} className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((menuItem, index) => (
            <HeaderItem
              key={`${menuItem.name}-${index}`}
              name={menuItem.name}
              Icon={menuItem.icon}
            />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (menuItem, index) =>
              index < 3 && (
                <HeaderItem
                  key={`${menuItem.name}-${index}`}
                  name={""}
                  Icon={menuItem.icon}
                />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="flex flex-col gap-3 absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (menuItem, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={`${menuItem.name}-${index}`}
                        name={menuItem.name}
                        Icon={menuItem.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
