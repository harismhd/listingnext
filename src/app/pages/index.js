// pages/index.js
import { useEffect, useState } from "react";
import { supabase } from "..src/app/lib/supabase";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchRestaurants() {
      const { data, error } = await supabase
        .from("restaurants")
        .select("*")
        .order("rating", { ascending: false })
        .limit(10);

      if (error) {
        console.error("Error fetching restaurants:", error.message);
        return;
      }

      setRestaurants(data);
    }

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Top 10 Restaurants in Calicut</h1>
      <ul>
        {restaurants.map((restaurant, index) => (
          <li key={index}>
            <h2>{restaurant.title}</h2>
            <img src={restaurant.image} alt={restaurant.title} />
            <p>Location: {restaurant.location}</p>
            <p>Description: {restaurant.description}</p>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Text: {restaurant.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
