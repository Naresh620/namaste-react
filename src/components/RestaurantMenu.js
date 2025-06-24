import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resinfo=useRestaurantMenu(resId);

  const[showIndex,setshowIndex]=useState(0);

  if (!resinfo) return <Shimmer />;

  const name= resinfo.data.cards[0]?.card?.card?.text;
  const itemCards =
    resinfo.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

//   console.log(resinfo.data?.cards[5].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
// )
  const category=resinfo.data?.cards[5].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">{name}</h1>
      <div>
        {
          category.map((category,index)=><RestaurantCategory 
          key={category.card.card.title}
          data={category.card.card}
          showItem={index === showIndex ? true : false} 
          setshowIndex={() => setshowIndex(index) }/>)
        }
      </div>
    </div>
  );
};

export default RestaurantMenu;
