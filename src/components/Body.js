import { useEffect, useState ,useContext} from "react";
import { RestaurantCard, WithPromotedlabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

export const Body = () => {
  const [ListofRestaurantData, setListofRestaurantData] = useState([]);
  const [filterofRestaurantData, setfilterofRestaurantData] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const OnlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = WithPromotedlabel(RestaurantCard);

  const{loggedInuser,setuserName}=useContext(UserContext);

  const searcHandler = (e) => {
    const value = e.target.value;
    setSearchText(value);
    const searchdata = ListofRestaurantData.filter((res) =>
      res.info?.name?.toLowerCase().includes(value.toLowerCase())
    );
    setfilterofRestaurantData(searchdata);
  };

  const Fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1"
    );
    const Data = await data.json();
    const resList =
      Data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListofRestaurantData(resList);
    setfilterofRestaurantData(resList);
  };

  useEffect(() => {
    Fetchdata();
  }, []);

  if (ListofRestaurantData.length === 0) return <Shimmer />;
  if (OnlineStatus === false)
    return <h3>Please check your internet connection</h3>;

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <button
          className="m-2 p-2 w-50 border bg-blue-500 text-white"
          onClick={() => {
            const filterList = ListofRestaurantData.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilterofRestaurantData(filterList);
          }}
        >
          Top Rated Restaurants
        </button>

        <input
          className="p-2 m-2 w-50 border"
          type="text"
          onChange={searcHandler}
          value={SearchText}
          placeholder="Search"
        />

        <input
        className=" border border-black p-2"
        value={loggedInuser}
        onChange={(e)=>setuserName(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-between">
        {filterofRestaurantData.map((resData) => (
          <Link
            className="res-link"
            key={resData.info?.id}
            to={"/restaurant/" + resData.info?.id}
          >
            {resData.info.isOpen ? (
              <RestaurantCardPromoted resData={resData.info} />
            ) : (
              <RestaurantCard resData={resData.info} SearchText={SearchText} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
