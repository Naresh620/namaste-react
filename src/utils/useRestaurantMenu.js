import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resinfo, setResinfo] = useState(null);

  const fetchData = async () => {
      const data = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&submitAction=ENTER`
      );
      const json = await data.json();

      setResinfo(json);
  };

  useEffect(() => {
    fetchData();
  }, [resId]);

  return resinfo;
};

export default useRestaurantMenu;
