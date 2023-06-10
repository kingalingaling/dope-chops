import { useState } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { updateFulfilled } from "../config/controller";

const OrderDetails = (props: any) => {
  const handleChangeState = () => {
    props.onSetOnView(false);
  };

  const order = props.order;
  const [newFulfilled, setNewFulfilled] = useState<boolean>();

  return (
    props.show && (
      <div className="flex flex-col justify-center items-center">
        <div
          className="bg-black/70 fixed flex w-full h-screen z-10 top-0 left-0"
          onClick={() => handleChangeState()}
        ></div>
        <div className="fixed top-32 md:top-1/4 mx-auto my-auto z-20 border-black bg-gray-800 text-white shadow-xl duration-300 rounded-lg p-4 w-4/5 sm:w-[600px]">
          <div className="flex flex-col justify-between px-2 py-3">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg text-orange-600">
                Order ID: {order.id}
              </h2>
              <p className="text-orange-400 text-sm font-bold">{new Date(order.timestamp.seconds*1000).toLocaleString('en-NG')}</p>
            </div>
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
              <p className="">
                <span className="font-bold">Order Details - </span> {order.order.join(", ")}
              </p>
              <p>
                <span className="font-bold">Delivery Address: </span>
                {order.delivery_address}
              </p>
              <p><span className="font-bold">Food Cost: </span>{formatCurrency(order.cost)}</p>
              <p><span className="font-bold">Delivery Fee: </span>{formatCurrency(order.delivery_fee)}</p>
              <p><span className="font-bold">Order Notes: </span>{order.order_notes}</p>
            </div>
            <hr className="w-full my-2" />
            <div>
            <span className="font-bold">Order Status: </span>{order.fulfilled? 'Fulfilled': 'Not Fulfilled'}
            </div>
            <div className="pt-10 flex justify-center">
              {order.fulfilled ? (
                <button
                  className="bg-white border-white text-black hover:text-white hover:bg-gray-600 hover:border-gray-600 mx-4 absolute bottom-4 left-4"
                  onClick={() => {
                    setNewFulfilled(false);
                    updateFulfilled(order.id, {fulfilled:false});  
                    handleChangeState();
                    console.log(newFulfilled)
                  }}
                >
                  Mark as Unfulfilled
                </button>
              ) : ( 
                <button
                  className="bg-white border-white text-black hover:text-white hover:bg-orange-600 hover:border-orange-600 mx-4 absolute bottom-4 right-4"
                  onClick={() => {
                    setNewFulfilled(true);
                    updateFulfilled(order.id, {fulfilled:true});
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