import data from "../data/index.json";
import { foodDetails } from "../../types";
import { useState } from "react";
import FoodDetails from "./FoodDetails";

const foodData: Array<foodDetails> = data.home;

const catButtons = ["All", "Meats", "Snacks", "Pastries", "Cakes"];
const priceFilters = ["$", "$$", "$$$"];
// let foodCard:Object;

const Foods = () => {
  const [activeCat, setActiveCat] = useState("All");
  const [activePriceR, setActivePriceR] = useState("");
  const [foods, setFoods] = useState(foodData);
  const [onView, setOnView] = useState(false);
  const [getFood, setGetFood] = useState({});

  //   Filter Food category - Meats/Snacks/Pastries/Cakes
  const filterCategory = (category: string) => {
    setFoods(
      foodData.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (priceRange: string) => {
    setFoods(
      foodData.filter((item) => {
        return item.priceRange === priceRange;
      })
    );
  };

  // Set View Moe Info for food items
  const onSetOnView = (newOnView: any) => {
    setOnView(newOnView);
  };

  return (
    <div className="max-w-[1640px] px-4 py-8">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* Filter Categories */}
        <div className="text-white">
          <p className="font-bold">Filter Categories</p>
          <div className="flex justify-between flex-wrap">
            {catButtons.map((i) => (
              <button
                onClick={() => {
                  setActiveCat(i);
                  setActivePriceR("");
                  i === "All" ? setFoods(foodData) : filterCategory(i);
                }}
                className={
                  activeCat == i
                    ? "border-white bg-white text-orange-600 mx-2"
                    : "bg-orange-600 border-orange-600 hover:border-white hover:bg-white hover:text-orange-600 mx-2 my-1"
                }
                key={i}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
        {/* Filter Price */}
        <div className="text-white mt-4">
          <p className="font-bold">Filter Price</p>
          <div className="flex justify-between flex-wrap max-w-[400px]">
            {priceFilters.map((i) => (
              <button
                onClick={() => {
                  setActivePriceR(i);
                  setActiveCat("");
                  filterPrice(i);
                }}
                className={
                  activePriceR == i
                    ? "border-white bg-white text-orange-600 mx-2"
                    : "bg-orange-600 border-orange-600 hover:border-white hover:bg-white hover:text-orange-600 mx-2 my-1"
                }
                key={i}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border-black text-white shadow-xl hover:scale-105 duration-300 rounded-lg cursor-pointer"
            onClick={() => {
              setOnView(true);
              setGetFood(item);
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[150px] md:h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex items-center justify-between px-2 py-3">
              <p className="font-bold">{item.name}</p>
              <p className="">
                <span className="text-orange-600 font-bold">N{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      

      <FoodDetails show={onView} onSetOnView={onSetOnView} foodData={getFood}/>
    </div>
  );
};

export default Foods;
