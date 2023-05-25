import data from "../data/index.json";
import { OrderItemProps } from "../../types";
import { foodCart } from "../context/FoodContext";
import { AiOutlineClose } from "react-icons/ai";
import { formatCurrency } from "../config/formatCurrency";

const OrderItem = ({ id, quantity }: OrderItemProps) => {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = foodCart();

  const orderItem = data.home.find((i) => i.id === id);
  if (orderItem == null) {
    return null;
  }

  return (
    <div className="flex justify-between" key={orderItem.id}>
      <div className="flex w-3/5">
        <img
          src={orderItem.image}
          className="w-[55px] h-[45px] object-cover rounded-xl mr-1"
          alt=""
        />
        <div className="flex">
          <div className="flex flex-col">
            <p>{orderItem.name}</p>
            <p className="text-sm">{formatCurrency(orderItem.price)}</p>
          </div>
          {quantity > 1 && <small className="pl-1 text-xs">X{quantity}</small>}
        </div>
      </div>
      <div className="flex items-center mx-2 w-1/5">
        <button
          className="border-none mr-1 px-3.5 bg-white text-black hover:text-white hover:bg-gray-600 rounded-full"
          onClick={() => {
            decreaseCartQuantity(orderItem.id);
          }}
        >
          -
        </button>
        <div className="border border-white rounded-full text-center flex items-center justify-center">
          {quantity}
        </div>
        <button
          className="rounded-full px-3 ml-1 bg-white text-black hover:bg-orange-600 hover:text-white border-none"
          onClick={() => {
            increaseCartQuantity(orderItem.id);
          }}
        >
          +
        </button>
      </div>

      <div className="flex justify-around items-center w-1/5">
        <p className="text-right text-sm font-bold text-orange-600 mr-1">{formatCurrency(quantity*orderItem.price)}</p>
        <div className="border border-gray-600 hover:bg-gray-600 hover:text-white rounded-full p-1 cursor-pointer" onClick={() => removeFromCart(orderItem.id)}>
          <AiOutlineClose
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
