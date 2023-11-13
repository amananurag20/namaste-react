import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {
    
    const { resId } = useParams();
     
    const resInfo= useRestaurantMenu(resId);
    
    
    if (resInfo === null) {
        return <Shimmer />
    };

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    let { itemCards } = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

    if (itemCards===undefined) {
        ({ itemCards } = ( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]));
    };

    console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} :{costForTwoMessage} </p>;
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}- Rs {item.card.info.price}</li>
                ))};

            </ul>
        </div>
    );
};
export default RestaurantMenu;