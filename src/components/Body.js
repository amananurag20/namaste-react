import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
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
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6168595&lng=85.1472275&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json);
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   
    

    return listOfRestaurant.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}></input>
                        
                    <button onClick={() => {
                        console.log(searchText);
                        const filterRestaurant=listOfRestaurant.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            
                    );
                    setFilteredRestaurant(filterRestaurant);
                           
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestaurant.filter(res => (res.info.avgRating > 4));
                    setFilteredRestaurant(filterList);
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map(restaurant => (
                   <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard  resData={restaurant.info}/> </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;