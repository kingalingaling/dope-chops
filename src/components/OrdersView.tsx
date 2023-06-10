import OrderDetails from "./OrderDetails";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { ordersRef } from "./Cart";
import { useState, useEffect } from "react";
import { orderType } from "../../types";
import { GiShrug } from "react-icons/gi";

const OrdersView = () => {
  const [orders, setOrders] = useState<orderType[]>([]);
  const [onView, setOnView] = useState(false);
  const [orderData,setOrderData] = useState<orderType>()

  const onSetOnView = (newOnView: any) => {
    setOnView(newOnView);
  };

  useEffect(
    () =>{const getData = async() =>
    {
      onSnapshot(ordersRef, (snapshot: QuerySnapshot<DocumentData>) => {
        setOrders(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      })
    }
  getData()},
    []
  );
  return (
    <div className="bg-black/70 h-full text-white p-4">
      <h2 className="text-3xl text-center font-black">View Orders</h2>

      {/* Order Details */}
      {orders && orders.length ? (
        orders?.map((order) => (
          <div className="flex rounded-lg w-full p-2 my-2 shadow-md shadow-black/20 justify-between bg-gray-100/20"
          onClick={() => {setOrderData(order); setOnView(true);}}>
            <div className="f">
              <h2>Order ID: {order.id}</h2>
              <p>Name: <span className="font-bold">{order.name}</span></p>
              <p>Timestamp: <span className="font-bold">{order.timestamp? new Date(order.timestamp.seconds*1000).toLocaleString('en-NG'):''}</span></p>
            </div>
            <button className="rounded-full border-none bg-white text-black hover:bg-orange-600 hover:text-white">
                Details
            </button>
            {/* <div>
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
            </div> */}
          </div>
        ))
      ) : (
        <div className="h-full flex flex-col items-center justify-center">
          <GiShrug className="text-orange-600" size={100} />
          <p className="text-3xl text-center font-bold">
            There are currently{" "}
            <span className="text-orange-600">No Orders</span> in your database
          </p>
        </div>
      )}

      <OrderDetails show={onView} onSetOnView={onSetOnView} order={orderData} />
    </div>
  );
};

export default OrdersView;
