import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, check }) => {
    console.log("ya hai problem", items); return (
        check?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
            <div>
                {check?.itemCards.map((item) => (
                    <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">

                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item?.card?.info?.name} - </span>
                                <span> Rs.{item.card?.info?.price ? item?.card?.info?.price / 100 :
                                    item?.card?.info?.defaultPrice / 100}</span>
                            </div>
                            <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12  p-4">
                            <div className="absolute">
                                <button className="bg-black text-white rounded-lg p-2 mx-12">Add+</button>
                            </div>
                            {item?.card?.info?.imageId && (
                                <img className="rounded-md" src={CDN_URL + item?.card?.info?.imageId} />)
                            }
                        </div>
                    </div>
                ))}
            </div>) : (
            <div>
                {items.map((item) => (
                    <div key={item?.itemCards[0]?.card?.info?.id}>
                        <div className="p-2 m-2   text-left">
                            <div className="font-bold text-lg mb-3  ">{item.title}</div>
                            {item?.itemCards?.map((item2) => {
                                return (<div className=" border-gray-200 border-b-2 text-left flex justify-between" key={item2.card.info.id}>
                                    <div className="text-left w-9/12">
                                        <div className=" text-left text-sm py-2 ">
                                            <span>{item2?.card?.info?.name} -</span>
                                            <span> Rs.{item2?.card?.info?.price ?
                                                item2?.card?.info?.price / 100 : item2?.card?.info?.defaultPrice}</span>
                                        </div>
                                        <p className="text-xs mb-2  ">{item2.card.info.description}</p>
                                    </div>
                                    <div className="w-3/12 p-4">
                                        <div className="absolute">
                                            <button className="bg-black  text-white rounded-lg p-1 mx-12">Add+</button>
                                        </div>
                                        {item2?.card?.info?.imageId && (
                                            <img className="rounded-md" src={CDN_URL + item2?.card?.info?.imageId} />)
                                        }

                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>))}
            </div>)
    )
};

export default ItemList;