import { useState } from "react";
import { formatCurrency } from "../utilities/formatCurrency";

const OrderDetails = (props: any) => {
  const handleChangeState = () => {
    props.onSetOnView(false);
  };

  const [fulfilled, setFulfilled] = useState(false);
  const order = props.order;
  return (
    props.show && (
      <div className="flex flex-col justify-center items-center">
        <div
          className="bg-black/70 fixed flex w-full h-screen z-10 top-0 left-0"
          onClick={() => handleChangeState()}
        ></div>
        <div className="fixed top-32 md:top-1/4 mx-auto my-auto z-20 border-black bg-gray-800 text-white shadow-xl duration-300 rounded-lg p-4 w-4/5 sm:w-[600px]">
          <div className="flex flex-col justify-between px-2 py-3">
            <h2 className="font-bold text-xl text-orange-600">
              Order ID: {order.id}
            </h2>
            <div className="flex justify-between pt-4">
              <p className="font-bold">{order.name}</p>
              <div className="border-r-2 border-white"></div>
              <p className="font-bold border-r-2 border-gray-800">
                {order.email}
              </p>
              <div className="border-r-2 border-white"></div>
              <p className="font-bold">{order.phone_number}</p>
            </div>
            <div className="pt-4">
              <p className="font-bold">Order Details: {order.order}</p>
              <p>
                <span className="font-bold">Delivery Address: </span>
                {order.delivery_address}
              </p>
            </div>
            {/* <p>
              <span className="font-bold text-orange-600">Category: </span>{" "}
              {foodItem.category}
            </p>
            <p>{foodItem.info}</p>
            <p>
              <span className="font-bold text-orange-600">Price: </span>
              {formatCurrency(foodItem.price)}
            </p> */}
            <div className="pt-10 flex justify-center">
              {fulfilled ? (
                <button
                  className="bg-white border-white text-black hover:text-white hover:bg-gray-600 hover:border-gray-600 mx-4 absolute bottom-4 left-4"
                  onClick={() => {
                    setFulfilled(false);
                    handleChangeState();
                  }}
                >
                  Mark as Unfulfilled
                </button>
              ) : (
                <button
                  className="bg-white border-white text-black hover:text-white hover:bg-orange-600 hover:border-orange-600 mx-4 absolute bottom-4 right-4"
                  onClick={() => {
                    setFulfilled(true);
                    handleChangeState();
                  }}
                >
                  Mark as Fulfilled
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default OrderDetails;
