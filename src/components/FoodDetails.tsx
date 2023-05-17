const FoodDetails = (props: any) => {
  const handleChangeState = () => {
    props.onSetOnView(false);
  };
  const foodItem = props.foodData;
  return (
    props.show && (
      <div className="flex flex-col justify-center items-center">
        <div
          className="bg-black/70 fixed flex w-full h-screen z-10 top-0 left-0"
          onClick={() => handleChangeState()}
        ></div>
        <div className="fixed top-32 md:top-1/4 mx-auto my-auto z-20 border-black bg-gray-800 text-white shadow-xl duration-300 rounded-lg p-4 w-4/5 sm:w-[600px]">
          <img
            src={foodItem.image}
            alt={foodItem.name}
            className="w-full h-[250px] object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between px-2 py-3">
            <p className="font-bold text-xl text-orange-600">{foodItem.name}</p>
            <p>
              <span className="font-bold text-orange-600">Category: </span>{" "}
              {foodItem.category}
            </p>
            <p>
              {foodItem.info}
            </p>
            <p>
              <span className="font-bold text-orange-600">Price: </span> N
              {foodItem.price}
            </p>
            <div className="pt-10">
              <button
                className="bg-white border-white text-black hover:text-white hover:bg-gray-600 hover:border-gray-600 mx-4 absolute bottom-4 left-4"
                onClick={() => handleChangeState()}
              >
                Cancel
              </button>
              <button className="bg-white border-white text-black hover:text-white hover:bg-orange-600 hover:border-orange-600 mx-4 absolute bottom-4 right-4">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default FoodDetails;
