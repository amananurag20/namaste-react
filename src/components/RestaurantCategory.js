import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory= ({data})=>{
    const [showItem, setshowItem]= useState(false);
     
    const handleClick= ()=>{
        setshowItem(!showItem);
    }
   return  (<div>
       <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">{data.title} ({data.title.length})</span>
        <span>🔽</span>
        </div>
        {showItem && <ItemList items={data?.categories} check={data}/>}
       </div>
       


    </div>)
}

export default RestaurantCategory;