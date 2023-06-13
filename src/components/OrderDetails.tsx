import { useState } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import {
  deleteOrder,
  updateFulfilled,
  updateFulfilledTime,
} from "../config/controller";
import { ImBin } from "react-icons/im";
import { serverTimestamp } from "firebase/firestore";

const OrderDetails = (props: any) => {
  const handleChangeState = () => {
    props.onSetOnView(false);
  };

  const order = props.order;
  const [newFulfilled, setNewFulfilled] = useState<boolean>();
  const [confirm, setConfirm] = useState(false);

  return (
    props.show && (
      <div className="flex flex-col justify-center items-center">
        {/* Background Filter */}
        <div
          className="bg-black/70 fixed flex w-full h-screen z-10 top-0 left-0"
          onClick={() => handleChangeState()}
        ></div>

        {/* Confirmation before deletion */}
        {confirm ? (
          <div className="flex fixed top-32 md:top-1/4 w-3/4 mx-auto border-none bg-red-700 text-white p-4 rounded-2xl my-auto z-30 flex-col justify-center items-center">
            <p className="font-bold text-center">
              Are You sure you want to delete order entry? <br />
              NO RECOVERY AFTER DELETION
            </p>
            <div className="flex justify-between pt-5">
              <button
                className="bg-white mx-5 border-white text-black hover:text-white hover:bg-gray-600 hover:border-gray-600"
                onClick={() => {
                  setConfirm(false);
                }}
              >
                No
              </button>
              <button
                className="bg-red-600 mx-5 border-none hover:bg-red-800"
                onClick={() => {
                  deleteOrder(order.id);
                  setConfirm(false);
                  handleChangeState();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Order Details */}
        <div className="fixed max-h-[80vh] overflow-y-auto no-scrollbar top-32 md:top-1/4 mx-auto my-auto z-20 border-black bg-gray-800 text-white shadow-xl duration-300 rounded-lg p-4 w-4/5 sm:w-[600px]">
          <div className="flex flex-col justify-between px-2 py-3">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h2 className="font-bold text-sm mb-1 md:mb-0 lg:text-lg text-orange-600">
                ID: {order.id}
              </h2>
              <button
                className="border my-1 md:my-0 border-white p-1 bg-white text-black hover:bg-red-600 hover:text-white hover:border-red-600  rounded-xl w-[50px]"
                onClick={() => setConfirm(true)}
              >
                <ImBin size={15} className="mx-auto" />
              </button>
              <p className="text-orange-400 text-sm font-bold">
                {new Date(order.timestamp.seconds * 1000).toLocaleString(
                  "en-NG"
                )}
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between pt-4">
              <p className="font-bold">{order.name}</p>
              <div className="md:border-r-2 md:border-white"></div>
              <hr className="w-full my-0.5 md:hidden" />
              <p className="font-bold md:border-r-2 md:border-gray-800">
                {order.email}
              </p>
              <div className="md:border-r-2 md:border-white"></div>
              <hr className="w-full my-0.5 md:hidden" />
              <p className="font-bold">{order.phone_number}</p>
              <hr className="w-full mt-0.5 md:hidden" />
            </div>
            <div className="pt-4">
              <p className="">
                <span className="font-bold">Order Details - </span>{" "}
                {order.order.join(", ")}
              </p>
              <p>
                <span className="font-bold">Delivery Address: </span>
                {order.delivery_address}
              </p>
              <p>
                <span className="font-bold">Food Cost: </span>
                {formatCurrency(order.cost)}
              </p>
              <p>
                <span className="font-bold">Delivery Fee: </span>
                {formatCurrency(order.delivery_fee)}
              </p>
              <p>
                <span className="font-bold">Order Notes: </span>
                {order.order_notes}
              </p>
            </div>
            <hr className="w-full my-2" />
            <div>
              <span className="font-bold">Order Status: </span>
              {order.fulfilled ? "Fulfilled" : "Not Fulfilled"}
            </div>
            <div className="pt-10 flex items-center justify-center">
              {order.fulfilled ? (
                <div className="flex flex-col md-flex-row">
                  <p className="mb-1 text-center">
                    Fulfilled Date:{" "}
                    {new Date(order.fulfilled_time.seconds * 1000).toLocaleString(
                      "en-NG"
                    )}
                  </p>
                  <button
                    className="bg-white border-white text-black hover:text-white hover:bg-gray-600 hover:border-gray-600"
                    onClick={() => {
                      setNewFulfilled(false);
                      updateFulfilled(order.id, { fulfilled: false });
                      handleChangeState();
                      console.log(newFulfilled);
                    }}
                  >
                    Mark as Unfulfilled
                  </button>
                </div>
              ) : (
                <button
                  className="bg-white border-white text-black hover:text-white hover:bg-orange-600 hover:border-orange-600 mx-4 absolute bottom-4 right-4"
                  onClick={() => {
                    setNewFulfilled(true);
                    updateFulfilled(order.id, { fulfilled: true });
                    updateFulfilledTime(order.id, {
                      fulfilled_time: serverTimestamp(),
                    });
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
