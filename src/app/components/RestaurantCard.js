// components/RestaurantCard.js
const RestaurantCard = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.title}</h2>
      <img src={restaurant.image} alt={restaurant.title} />
      <p>{restaurant.description}</p>
      <p>Location: {restaurant.location}</p>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>{restaurant.text}</p>
    </div>
  );
};

export default RestaurantCard;
