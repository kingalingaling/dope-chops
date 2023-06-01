import data from "../data/index.json";
import { OrderItemProps } from "../../types";
import { foodCart } from "../context/FoodContext";
import { AiOutlineClose } from "react-icons/ai";
import { formatCurrency } from "../utilities/formatCurrency";

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
    <div className="flex justify-between mb-1 w-full" key={orderItem.id}>
      <div className="flex w-[150px] lg:w-3/5">
        <img
          src={orderItem.image}
          className="w-[55px] h-[45px] object-cover rounded-xl pr-1"
          alt=""
        />
        <div className="flex">
          <div className="flex flex-col">
            <p className="text-xs md:text-md">{orderItem.name}</p>
            <p className="text-xs text-orange-600 md:text-md">{formatCurrency(orderItem.price)}</p>
          </div>
          {quantity > 1 && <small className="pl-1 text-xs">X{quantity}</small>}
        </div>
      </div>
      <div className="flex items-center w-1/5 text-xs md:text-md mr-1">
        <button
          className="border-none mr-1 px-2 bg-white text-black hover:text-white hover:bg-gray-600 rounded-full"
          onClick={() => {
            decreaseCartQuantity(orderItem.id);
          }}
        >
          -
        </button>
        <div className="text-center flex items-center justify-center">
          {quantity}
        </div>
        <button
          className="rounded-full px-2 ml-1 bg-white text-black hover:bg-orange-600 hover:text-white border-none"
          onClick={() => {
            increaseCartQuantity(orderItem.id);
          }}
        >
          +
        </button>
      </div>

      <div className="flex justify-around items-center w-1/5">
        <p className="text-right mr-1.5 text-xs font-bold text-orange-600">{formatCurrency(quantity*orderItem.price)}</p>
        <div className="border border-gray-600 hover:bg-gray-600 hover:text-white rounded-full p-1 cursor-pointer" onClick={() => removeFromCart(orderItem.id)}>
          <AiOutlineClose
          size={10}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
