import { useEffect, useState } from "react";
import { cloudinaryImageId, restaurantNameAPI } from "./card";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RestaurentCard = () => {
  const [restaurantName, setRestaurantName] = useState();
  const [loading, setLoading] = useState(true);

  // API call using asyn , await
  const restAPIcall = async () => {
    const data = await fetch(restaurantNameAPI);
    const resData = await data.json();
    // state will update once get the respose from the API
    setRestaurantName(
      resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setLoading(false);
  };

  useEffect(() => {
    // calling apicall inside useEffect
    restAPIcall();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="restaurant-container">
      {/* MAP  function-----> map the array from restaurantName
      restaurantname is the state  that having a array after the aPI call
      */}
      {restaurantName?.map((i) => (
        <Card style={{ width: "18rem", margin: "10px" }} key={i.info.id}>
          <Card.Img
            variant="top"
            src={cloudinaryImageId + i.info.cloudinaryImageId}
          />
          <Card.Body>
            <Card.Title>{i.info.name}</Card.Title>
            <Card.Text>{i.info.cuisines}</Card.Text>
            <Button variant="primary">{i.info.avgRating}</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RestaurentCard;
