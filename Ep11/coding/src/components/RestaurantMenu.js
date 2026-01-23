import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo =
    resInfo?.cards?.find(
      (c) => c?.card?.card?.info
    )?.card?.card?.info;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    locality,
  } = restaurantInfo || {};

  const categories =
    resInfo?.cards
      ?.find((c) => c.groupedCard)
      ?.groupedCard
      ?.cardGroupMap
      ?.REGULAR
      ?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || [];

  return (
    <div className="max-w-3xl mx-auto px-4">
      
      {/* Restaurant Header */}
      <div className="text-left border-b pb-4 mb-6">
        <h1 className="font-bold text-3xl text-gray-900">
          {name}
        </h1>

        <p className="text-gray-600 mt-1">
          {cuisines?.join(", ")}
        </p>

        <div className="flex gap-4 mt-2 text-sm text-gray-700">
          <span className="font-semibold">
            ⭐ {avgRating}
          </span>
          <span>{totalRatingsString}</span>
          <span>• {costForTwoMessage}</span>
        </div>

        {locality && (
          <p className="text-sm text-gray-500 mt-1">
            📍 {locality}
          </p>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {categories.map((category, index) => {
          const data = category.card.card;

          return (
            <RestaurantCategory
              key={data.categoryId ?? `${data.title}-${index}`}
              data={data}
              index={index}
              showItems={index === showIndex ? true : false}
              setShowIndex={setShowIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
