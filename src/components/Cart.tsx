import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { foodCart } from "../context/FoodContext";
import OrderItem from "./OrderItem";
import { formatCurrency } from "../utilities/formatCurrency";
import data from "../data/index.json";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { cartItem } from "../../types";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import dotenv from 'dotenv';

dotenv.config();
const ordersRef = collection(db, "orders");

const Cart = (props: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState([""]);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [empty, setEmpty] = useState("");
  const [notes, setNotes] = useState("")
  const [cost, setCost] = useState(0);

  const handleChangeState = () => {
    props.onSetCart(false);
    setEmpty("");
  };

  const deliveryFee = 1000;

  const { emptyCart, cartItems } = foodCart();

  let navigate = useNavigate();

  const validateInput = (input: string) => {
    if (input.trim().length === 0) {
      console.error(`Empty Field - ${input}`);
      return true;
    } else {
      return false;
    }
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleCheckout = () => {
    if (validateInput(name) && validateInput(phone) && validateInput(address)) {
      setEmpty(
        "All fields except 'Notes' are required. Please ensure you have filled in the correct information to avoid errors"
      );
    } else {
      setEmpty("");
      if (validateEmail(email)) {
        console.log("email is valid");
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            if (response.status === "completed") {
              navigate("/order-completed");
              emptyCart();
              onSubmitOrder();
            } else {
              navigate("/order-not-completed");
            }
            closePaymentModal(); // this will close the modal programmatically
          },
          onClose: () => {},
        });
      } else {
        setError("Email is Invalid");
      }
    }
    // if (validateEmail(email)) {
    //   console.log("email is valid");
    //   onSubmitOrder();
    //   navigate("/order-completed");
    //   emptyCart();
    // } else {
    //   setError("Email is Invalid");
    // }
  };

  useEffect(() => {
    // Retrieve data from local storage on component mount
    const dataFromLocalStorage: cartItem[] = cartItems;
    const foodOrdered = dataFromLocalStorage.map((food) => {
      return [data.home[food.id].name, food.quantity].join(": ") + " & ";
    });
    setOrder(foodOrdered);
    setCost(
        cartItems.reduce((total, cartItem) => {
          const orderItem = data.home.find((i) => i.id === cartItem.id);
          return total + (orderItem?.price || 0) * cartItem.quantity;
        }, 0)
    );
  }, [cartItems]);

  // const handleButtonClick = async() => {
  //   try{
  //     // store data in firestore
  //     await collection(db, 'orders').add()
  //   }
  // }

  const onSubmitOrder = async () => {
    try {
      await addDoc(ordersRef, {
        name: name,
        email: email,
        order: order,
        cost: cost,
        order_notes: notes,
        delivery_fee: deliveryFee,
        phone_number: phone,
        delivery_address: address,
        timestamp: new Date(),
        fulfilled: false
      });
    } catch (err) {
      console.error(err);
    }
  };

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_API,
    tx_ref: Date.now().toLocaleString(),
    amount: cost,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: "Dope Chops Payment",
      description: `Payment for ${order}`,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    props.show && (
      <>
        <div
          className="bg-transparent fixed flex w-full h-screen z-10 top-0 left-0"
          onClick={() => handleChangeState()}
        ></div>
        <div className="p-4 max-h-[70vh] overflow-y-auto no-scrollbar rounded-xl flex flex-col z-20 fixed right-4 top-2 lg:top-4 w-[330px] md:w-[400px] lg:w-[500px] bg-white">
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
            <div className="w-full">
              <div className="flex items-center w-full">
                <h2 className="mx-auto text-center mb-3 text-3xl md:text-4xl lg:text-5xl font-black text-orange-600">
                  CART
                </h2>
                <AiOutlineClose
                  size={25}
                  className="cursor-pointer text-gray-700"
                  onClick={() => handleChangeState()}
                />
              </div>
              {cartItems.map((item) => (
                <OrderItem key={item.id} {...item} />
              ))}

              {/* Delivery Fee */}
              <div className="flex justify-between mb-1">
                <div className="flex w-3/5">
                  <p>FLAT DELIVERY FEE</p>
                </div>

                <div className="flex justify-around items-center w-1/5">
                  <p className="text-right text-sm font-bold text-orange-600 mr-5">
                    {formatCurrency(deliveryFee)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-3 font-bold">
                <p>TOTAL</p>
                <p className="text-orange-500">{formatCurrency(cost + deliveryFee)}</p>
              </div>
              <div>
                <h2 className="py-2 font-bold text-lg text-orange-600">
                  Delivery Details
                </h2>
                {empty && <p className="text-red-600">{empty}</p>}
                <form action="">
                  <label htmlFor="name" className="font-bold text-xs">
                    Name
                  </label>
                  <input
                    className="border outline-orange-400 rounded-lg border-gray-500 px-2 w-full"
                    type="text"
                    name="name"
                    id=""
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label htmlFor="email" className="font-bold text-xs">
                    Email
                    {error && (
                      <span className="ml-5 text-red-600 text-xs">
                        !!!{error}
                      </span>
                    )}
                  </label>
                  <input
                    className="border outline-orange-400 rounded-lg border-gray-500 px-2 w-full"
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="phone" className="font-bold text-xs">
                    Phone Number
                  </label>
                  <input
                    className="border outline-orange-400 rounded-lg border-gray-500 px-2 w-full"
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  {/* Address */}
                  <label htmlFor="address" className="font-bold text-xs">
                    Address
                  </label>
                  <textarea
                    className="border outline-orange-400 rounded-lg border-gray-500 px-2 w-full"
                    name="orderAddress"
                    rows={3}
                    id=""
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  ></textarea>

                  {/* Notes */}
                  <label htmlFor="address" className="font-bold text-xs">
                    Notes <small> (Any additional requests, preferernces)</small>
                  </label>
                  <textarea
                    className="border outline-orange-400 rounded-lg border-gray-500 px-2 w-full"
                    name="orderNotes"
                    rows={3}
                    id=""
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </form>
              </div>
              <button
                className="border-orange-600 bg-orange-600 text-white hover:bg-white w-full my-2 hover:text-orange-600"
                onClick={() => {
                  handleCheckout();
                  setNotes("");
                  // onSubmitOrder();
                }}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
        <script src="hiitp://checkout.flutterwave.com/v3.js"></script>
      </>
    )
  );
};

export { ordersRef };
export default Cart;
