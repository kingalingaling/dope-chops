import OrderDetails from "./OrderDetails";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { ordersRef } from "./Cart";
import { useState, useEffect } from "react";
import { orderType } from "../../types";
import { GiShrug } from "react-icons/gi";
import { BiCheckCircle } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

const OrdersView = () => {
  const [orders, setOrders] = useState<orderType[]>([]);
  const [onView, setOnView] = useState(false);
  const [orderData, setOrderData] = useState<orderType>();
  const [sort, setSort] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("ascending");

  const onSetOnView = (newOnView: any) => {
    setOnView(newOnView);
  };

  useEffect(() => {
    const getData = async () => {
      onSnapshot(ordersRef, (snapshot: QuerySnapshot<DocumentData>) => {
        setOrders(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      });
    };
    getData();
  }, []);

  const sortedOrders = orders?.sort((a, b) => {
    if (sort === "name") {
      if (a.name && b.name) {
        if (sortOrder === "ascending") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      }
    }
    if (sort === "timestamp") {
      if (a.timestamp && b.timestamp) {
        if (sortOrder === "ascending") {
          return a.timestamp.toMillis() - b.timestamp.toMillis();
        } else {
          return b.timestamp.toMillis() - a.timestamp.toMillis();
        }
      }
    }
    if (sort === "cost") {
      if (sortOrder === "ascending") {
        return Number(a.cost) - Number(b.cost);
      } else {
        return Number(b.cost) - Number(a.cost);
      }
    }
    return 0;
  });

  return (
    <div className="bg-black/70 h-full text-white p-5 pb-4">
      <h2 className="text-3xl text-center font-black">View Orders</h2>
      <div className="py-3 flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-2 text-center">Sort Orders</h2>
        <select
          className="p-2 rounded-xl w-36 bg-white text-gray-900"
          defaultValue={""}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value=""></option>
          <option value="timestamp">Date Ordered</option>
          <option value="name">Name</option>
          <option value="cost">Order Total</option>
        </select>

        {sort === "" ? (
          ""
        ) : sort === "timestamp" ? (
          <select
            className="p-2 rounded-xl mt-3 w-36 bg-white text-gray-900"
            defaultValue={""}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="ascending">Earliest First</option>
            <option value="descending">Most Recent</option>
          </select>
        ) : (
          <select
            className="p-2 rounded-xl mt-3 w-36 bg-white text-gray-900"
            defaultValue={""}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        )}
      </div>
      {/* Order Details */}
      {orders && orders.length ? (
        sortedOrders?.map((order) => (
          <div
            className="flex hover:bg-gray-100/50 cursor-pointer duration-300 rounded-lg w-full p-4 my-2 shadow-md shadow-black/20 justify-between bg-gray-100/20"
            onClick={() => {
              setOrderData(order);
              setOnView(true);
            }}
            key={order.id}
          >
            <div className="cursor-pointer">
              <h2 className="hidden md:block">Order ID: {order.id}</h2>
              <p>
                <span className="font-bold">{order.name}</span>
              </p>
              <p className="">
                <span className="font-bold">
                  {order.timestamp
                    ? new Date(order.timestamp.seconds * 1000).toLocaleString(
                        "en-NG"
                      )
                    : ""}
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-center mr-2 md:mr-0">Order Status</p>
              {order.fulfilled ? (
                <BiCheckCircle
                  size={24}
                  className="text-green-600 text-center"
                />
              ) : (
                <ImCancelCircle
                  size={20}
                  className="text-red-600 text-center"
                />
              )}
            </div>
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
