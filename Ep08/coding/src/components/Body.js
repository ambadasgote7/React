import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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

  
//   const fetchData = async () => {
//       const response = await fetch(
//         "https://corsproxy.io/?" + encodeURIComponent(SWIGGY_API)
//       );
//       const json = await response.json();

//       console.log(json);

//       setListOfRestaurant(
//         json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
//       );
//       setFilteredRestaurant(
//         json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
//       );
// };


  return listOfRestaurant.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
            }}/>
            <button onClick={() => {
             const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
                console.log(searchText);
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
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

      <div className="res-container">
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