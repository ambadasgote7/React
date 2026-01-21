import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

     const fetchData = async () => {
      const response = await fetch(SWIGGY_API, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
      },
    });
      const json = await response.json();
      setListOfRestaurant(
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
      setFilteredRestaurant(
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
};


  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) 
    return( 
      <h1>
        You are offline ! Please check your internet connection
      </h1>
    );


  return listOfRestaurant.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      <div className="filter flex">
        <div className="p-4 m-4">
            <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
            }}/>
            <button 
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
             const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
                console.log(searchText);
            }}>Search</button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <button
          className="px-4 py-1 bg-gray-100 m-4 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>

        </div>
        
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link  key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}>
            <RestaurantCard
            resData={restaurant}
          />
          </Link>
          
        ))}
      </div>
    </div>
  );
};


export default Body;