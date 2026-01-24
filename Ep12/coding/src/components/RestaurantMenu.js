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
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
     {categories.map((category, index) => (
  <RestaurantCategory
    key={category?.card?.card.title}
    data={category?.card?.card}
    showItems={index === showIndex}
    onToggle={() =>
      setShowIndex((prev) => (prev === index ? null : index))
    }
  />
))}

    </div>
  );
};

export default RestaurantMenu;
