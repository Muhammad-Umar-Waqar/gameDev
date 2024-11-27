'use client'

import { useState } from 'react';

export default function GameSelection() {
  const gameOptions = [
    { id: 1, name: 'Pac-Man' },
    { id: 2, name: 'Space Invaders' },
    { id: 3, name: 'Donkey Kong' },
    { id: 4, name: 'Tetris' },
    { id: 5, name: 'Super Mario Bros' },
  ];

  const [selectedGames, setSelectedGames] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleGameSelection = (gameName) => {
    setSelectedGames((prev) =>
      prev.includes(gameName)
        ? prev.filter((name) => name !== gameName)
        : [...prev, gameName]
    );
  };

  return (
    <div className="grid grid-cols-3 items-center gap-4 w-full">
      {/* Label */}
      <label htmlFor="arcade3" className="text-left font-medium text-gray-700">
        Select Games:
      </label>

      {/* Dropdown */}
      <div className="relative col-span-2">
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="border border-black relative rounded-full p-2 cursor-pointer bg-white"
        >
          <span className="text-gray-600 font-medium">
            {selectedGames.length > 0
              ? selectedGames.join(', ')
              : 'Select options'}
          </span>
          <svg
            className="absolute top-3 right-1 w-4 h-4 text-gray-500 inline-block float-right "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {gameOptions.map((game) => (
              <label
                key={game.id}
                className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mr-2 "
                  checked={selectedGames.includes(game.name)}
                  onChange={() => toggleGameSelection(game.name)}
                />
                {game.name}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
