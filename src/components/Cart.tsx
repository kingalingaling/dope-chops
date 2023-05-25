import { AiOutlineShoppingCart } from "react-icons/ai";
import { foodCart } from "../context/FoodContext";
import OrderItem from "./OrderItem";
import { formatCurrency } from "../config/formatCurrency";
import data from "../data/index.json";

const Cart = (props: any) => {
  const handleChangeState = () => {
    props.onSetCart(false);
  };

  const { cartItems } = foodCart();

  return (
    props.show && (
      <>
        <div
          className="bg-transparent fixed flex w-full h-screen z-10 top-0 left-0"
          onClick={() => handleChangeState()}
        ></div>
        <div className="p-4 rounded-xl flex flex-col z-20 fixed right-4 top-5 w-[500px] bg-white">
          {cartItems.length == 0 ? (
            <div className="flex flex-col justify-center">
              <h2 className="mx-auto text-3xl md:text-4xl lg:text-5xl font-black text-orange-600">
                CART
              </h2>
              <AiOutlineShoppingCart
                size={100}
                className="mx-auto my-20 text-orange-500/40"
              />
              <p className="text-black/60 font-bold text-xl mx-auto text-center">
                Your Cart is Empty <br />
                Let's Get You Something to Eat!
              </p>
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <OrderItem key={item.id} {...item} />
              ))}
              <div className="flex justify-between mt-3 font-bold text-xl">
                <p>TOTAL</p>
                <p className="text-orange-500">
                  {formatCurrency(
                    cartItems.reduce((total, cartItem) => {
                      const orderItem = data.home.find(
                        (i) => i.id === cartItem.id
                      );
                      return (
                        total + (orderItem?.price || 0) * cartItem.quantity
                      );
                    }, 0)
                  )}
                </p>
              </div>
              <button className="border-orange-600 bg-orange-600 text-white hover:bg-white hover:text-orange-600">
                Checkout
              </button>
            </div>
          )}
        </div>
      </>
    )
  );
};

export default Cart;
