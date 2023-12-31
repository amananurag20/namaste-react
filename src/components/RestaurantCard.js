import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = (props) => {
    const { resData } = props;
    const {loggedInUser}= useContext(UserContext);
    const { name, cuisines, avgRating, costForTwo, areaName } = resData;
    return (
        <div className="m-3 p-3 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="res-logo h-40 w-[180px] rounded-lg" alt="res-logo"
                src={CDN_URL + resData.cloudinaryImageId}></img>
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
            <h4>User: {loggedInUser}</h4>
        </div>
    );
};

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 px-2 py-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;