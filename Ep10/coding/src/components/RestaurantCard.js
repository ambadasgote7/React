import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    
   const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info || {};

   

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
            <img className="rounded-2xl" src={CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-2xl">{name}</h3>
            <h4 className="font-light py-2" >{cuisines.join(", ")}</h4>
            <h4 className="font-black">{avgRating} ⭐</h4>
            <h4  className="py-4">{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;