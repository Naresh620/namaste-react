import { useContext } from "react";
import { RES_URL } from "../utils/contents";
import UserContext from "../utils/userContext";

export const RestaurantCard = ({ resData }) => {
  if (!resData) return null;

  const {
    name,
    cuisines,
    avgRating,
    areaName,
    costForTwo,
    cloudinaryImageId,
  } = resData;

  const{loggedInuser}=useContext(UserContext);


  return (
    <div className="w-70 h-100 p-5 m-5 rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="w-60 h-50 rounded-lg" src={RES_URL + cloudinaryImageId} alt={name} />
      <div style={{ padding: "5px" }}>
        <h3 className="font-bold">{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <button className="bg-blue-500 text-white">⭐{avgRating}</button>
        <p>{costForTwo}</p>
        <p>user: {loggedInuser}</p>
      </div>
    </div>
  );
};

// ✅ Correct HOC
export const WithPromotedlabel = (RestaurantCardComponent) => {
  return (props) => (
    <div className="relative">
      <label className="absolute p-2 m-2 bg-black text-white rounded-lg z-10">
        Promoted
      </label>
      <RestaurantCardComponent {...props} />
    </div>
  );
};
