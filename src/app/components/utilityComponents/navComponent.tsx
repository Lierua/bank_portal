"use client";

import { useState, useRef } from "react";

import { IoIosLogOut } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import { TbMapSearch } from "react-icons/tb";

import SearchBar from "./SearchBar";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const NavComponent = ({ search, setSearch }: Props) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [showLocations, setShowLocations] = useState(false);
  const [location, setLocation] = useState("");

  const dateInputRef = useRef<HTMLInputElement>(null);

  const locations = [
    "Alle",
    "København",
    "Aarhus",
    "Odense",
    "Aalborg",
    "Esbjerg",
  ];

  // Open native date picker
  const openCalendar = () => {
    dateInputRef.current?.showPicker();
  };

  return (
    <div className="nav-banner rounded-l-lg h-[72px] lk-box-shadow grid grid-cols-[72px_200px_1fr]">
      <div className="bg-(--prime) rounded-l-lg flex items-center justify-center text-(--white)">
        <h1 className="font-bold!">lk</h1>
      </div>

      {/* Title */}
      <div className="bg-white flex items-center">
        <h2 className="pl-5 font-bold! text-(--black)/90">Oversigt</h2>
      </div>

      {/* Actions */}
      <div className="bg-white flex items-center justify-between px-5">
        {/* Left side */}
        <div className="flex items-center gap-8 relative">
          <div className="w-[250px]">
            <SearchBar search={search} setSearch={setSearch} />
          </div>

          {/* Hidden Date Input */}
          <input
            ref={dateInputRef}
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="top-[117%] left-[70%] absolute h-0"
          />
          <div onClick={openCalendar} className="">
            {/* Calendar */}
            <FiCalendar
              title="Vælg dato"
              className="text-(--black) text-4xl cursor-pointer transition-colors duration-200 hover:text-(--contrast) z-10"
            />
          </div>

          {/* Location */}
          <div className="relative">
            <TbMapSearch
              onClick={() => setShowLocations((prev) => !prev)}
              title="Vælg lokation"
              className="text-(--black) text-4xl cursor-pointer transition-colors duration-200 hover:text-(--contrast)"
            />

            {/* Dropdown */}
            {showLocations && (
              <div className="absolute left-0 mt-2 w-48 bg-white border-2 border-(--prime) rounded-[6px] shadow-lg z-50">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setLocation(loc);
                      setShowLocations(false);
                    }}
                    className="block rounded-[6px] w-full text-left px-4 py-2 hover:bg-gray-200 transition font-semibold"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <h3 className="font-bold">Steve Minecraft</h3>
          <IoPersonCircleOutline className="text-(--black) text-5xl h-[42px]" />

          <IoIosLogOut
            title="Log ud"
            className="text-(--black) text-[40px] cursor-pointer transition-colors duration-200 hover:text-(--contrast)"
          />
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
