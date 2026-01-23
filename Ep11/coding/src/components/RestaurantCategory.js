import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index}) => {

  const handleClick = () => {
    setShowIndex((prevIndex) =>
        prevIndex === index ? null : index
    );
  };

  return (
    <div className="w-6/12 mx-auto my-4">
      <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden">
        
        {/* Header */}
        <div
          className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-100 transition"
          onClick={handleClick}
        >
          <span className="font-semibold text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>

          <span
            className={`transform transition-transform duration-300 ${
              showItems ? "rotate-180" : ""
            }`}
          >
            ⬇️
          </span>
        </div>

        {/* Body */}
        {showItems && (
          <div className="px-2 pb-2">
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
