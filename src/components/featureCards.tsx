import { useState } from "react";
import data from "../data/index.json";
import { foodDetails } from "../../types";
import FoodDetails from "./FoodDetails";

const foods: Array<foodDetails> = data.home;

const FeatureCards = () => {
  const [onView, setOnView] = useState(false);
  const [getFood, setGetFood] = useState({});

  let featured: Array<any> = [];
  foods.map((item) => {
    if (item.featured) {
      featured.push(item);
    }
  });

  // Set View More Info for food items
  const onSetOnView = (newOnView: any) => {
    setOnView(newOnView);
  };

  return (
    <>
    <h2 className="text-orange-600 font-bold text-3xl pt-5 text-center">Featured This Week</h2>
    <div className="max-w-[1640px] mx-auto p-4 py-9 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card */}
      {featured.map((i) => (
        <div
          className="rounded-xl relative hover:scale-105 duration-300 cursor-pointer"
          key={i.id}
          onClick={() => {
            setGetFood(i);
            setOnView(true);
          }}
        >
          <div className="absolute bg-black/60 text-white w-full h-full rounded-xl">
            <p className="text-3xl md:text-4xl font-bold px-4 pt-1.5 md:pt-2.5">
              {i.name}
            </p>
            <p className="px-4 mt-1.5 md:mt-3">
              Until <span className="text-orange-300">Next Week</span>
            </p>
            <button className="bg-white border-white text-black mx-4 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            src={i.image}
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            alt=""
          />
        </div>
      ))}

    </div>
    <FoodDetails show={onView} onSetOnView={onSetOnView} foodData={getFood} />
    </>
  );
};

export default FeatureCards;
