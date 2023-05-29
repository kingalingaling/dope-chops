import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { ordersRef } from "./Cart";
import { useState, useEffect } from "react";
import { orderType } from "../../types";
import { GiShrug } from "react-icons/gi";

const OrdersView = () => {
  const [orders, setOrders] = useState<orderType[]>([]);
  useEffect(
    () =>
      onSnapshot(ordersRef, (snapshot: QuerySnapshot<DocumentData>) => {
        setOrders(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );
  return (
    <div className="bg-black/70 h-full text-white p-4">
      <h2 className="text-3xl text-center font-black">View Orders</h2>

      {/* Order Details */}
      {orders && orders.length ? (
        orders?.map((order) => (
          <div className="flex rounded-lg w-full p-2 my-2 shadow-md shadow-black/20 justify-between bg-gray-100/20">
            <div>
              <p>Name</p>
            </div>
            <div>
              <p>Email</p>
            </div>
            <div>
              <p>Order</p>
            </div>
            <div>
              <p>Phone Number</p>
            </div>
            <div>
              <p>Delivery Address</p>
            </div>
            <div>
              <p>Timestamp</p>
            </div>
          </div>
        ))
      ) : (
        <div className="h-full flex flex-col items-center justify-center">
            <GiShrug className="text-orange-600" size={100}/>
            <p className="text-3xl text-center font-bold">There are currently <span className="text-orange-600">No Orders</span> in your database</p>
        </div>
      )}
    </div>
  );
};

export default OrdersView;
