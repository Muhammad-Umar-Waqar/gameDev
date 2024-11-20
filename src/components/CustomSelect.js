'use client'

import { useState } from "react";

export default function CustomDropdown() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (value) => {
    setSelectedGame(value);
    setIsOpen(false);
  };

  return (
    <div className="relative mt-[50px]">
      <button
        onClick={toggleDropdown}
        className="p-2 bg-transparent shadow-lg border w-[287px] border-black rounded-xl text-left flex justify-between items-center"
      >
        <span className="font-light">
          {selectedGame ? selectedGame.charAt(0).toUpperCase() + selectedGame.slice(1) : "Game Name"}
        </span>
        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-black">
          <svg
            className="w-4 h-4 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {!selectedGame && (
            <li
              className="p-2 cursor-not-allowed text-gray-400"
              onClick={(e) => e.preventDefault()}
            >
              Game Name
            </li>
          )}
          <li
            className="p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => selectOption("volvo")}
          >
            Volvo
          </li>
          <li
            className="p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => selectOption("saab")}
          >
            Saab
          </li>
          <li
            className="p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => selectOption("opel")}
          >
            Opel
          </li>
          <li
            className="p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => selectOption("audi")}
          >
            Audi
          </li>
        </ul>
      )}
    </div>
  );
}
