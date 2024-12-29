import React, { useState } from "react";
import { Heart, Trash2 } from "lucide-react";
import { useFavorites } from "@/context/FavoritesContext";

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites(); // Access context
  const [isOpen, setIsOpen] = useState(false); // Track popover state

  // Toggle popover visibility
  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Heart Icon with Badge */}
      <div
        className="relative cursor-pointer"
        onClick={togglePopover} // Open popover on click
      >
        <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors duration-300" />
        {favorites.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {favorites.length}
          </span>
        )}
      </div>

      {/* Popover Content */}
      {isOpen && (
        <div className="absolute right-0 top-10 bg-white border border-gray-200 rounded-lg shadow-md p-4 w-64 z-50">
          <h2 className="text-lg font-bold text-gray-700 mb-2">Favorites</h2>
          {favorites.length > 0 ? (
            <ul className="space-y-2">
              {favorites.map((job, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-sm text-gray-600"
                >
                  <span>
                    <span className="font-bold">{job.title}</span> at{" "}
                    {job.company}
                  </span>
                  {/* Delete Button */}
                  <button
                    onClick={() => removeFavorite(index)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Remove favorite"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No favorites added yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
