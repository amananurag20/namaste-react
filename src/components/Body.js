import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    console.log(listOfRestaurant);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

    const { loggedInUser, setUserName } = useContext(UserContext);

    return listOfRestaurant.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className=" flex">
                <div className="m-4 p-3">
                    <input type="text" className="border border-solid border-black" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}></input>

                    <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={() => {
                        console.log(searchText);
                        const filterRestaurant = listOfRestaurant.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())

                        );
                        setFilteredRestaurant(filterRestaurant);

                    }}>Search</button>


                </div>

                <div className="m-4 p-3 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        const filterList = listOfRestaurant.filter(res => (res.info.avgRating > 4));
                        setFilteredRestaurant(filterList);
                    }}
                    >Top Rated Restaurant</button>
                </div>
                <div className="m-4 p-3 flex items-center">
                    <labe>UserName</labe>
                    <input className="border border-black p-2" value={loggedInUser} type="text"
                        onChange={(e) => setUserName(e.target.value)}></input>
                </div>
            </div>
            <div className=" flex flex-wrap">
                {filteredRestaurant.map(restaurant => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {restaurant.info.veg ?
                            (<RestaurantCardPromoted resData={restaurant.info} />) :
                            (<RestaurantCard resData={restaurant.info} />)}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;