import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex]= useState(null);


    if (resInfo === null) {
        return <Shimmer />
    };

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    // let { itemCards } = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

    // if (itemCards === undefined) {
    //     ({ itemCards } = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]));
    // };

    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>

        (c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
        ||
        (c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    );

    console.log("categories", categories);
    // let index = 100

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} :{costForTwoMessage} </p>


            {categories.map((category, index) => {
                return <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
                showItems={index ===showIndex && true}
                setShowIndex={()=>index ===showIndex ? setShowIndex(null) : setShowIndex(index) } />

            })}


        </div>
    );
};
export default RestaurantMenu;