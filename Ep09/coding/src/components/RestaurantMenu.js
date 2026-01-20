import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

   
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return (<Shimmer />) ;

    const restaurantInfo =
        resInfo?.cards?.find(
            c => c?.card?.card?.info
    )?.card?.card?.info;

    const {
        name,
        cuisines,
        costForTwoMessage,
        avgRating,
        totalRatingsString,
        locality
    } = restaurantInfo || {};

  const { itemCards } =
    resInfo
        ?.cards
        ?.find(c => c.groupedCard)
        ?.groupedCard
        ?.cardGroupMap
        ?.REGULAR
        ?.cards?.[1]
        ?.card
        ?.card || {};
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines?.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {" "}
                        {item.card.info.price/100}
                    </li>
                ))}
                
               
            </ul>
        </div>
    )
}

export default RestaurantMenu;