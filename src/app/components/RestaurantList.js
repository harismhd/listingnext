// components/RestaurantList.js
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
