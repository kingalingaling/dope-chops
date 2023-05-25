import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  MdFoodBank,
  MdDeliveryDining,
  MdDinnerDining,
  MdAccountCircle,
  MdDiscount,
} from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import Cart from "./Cart";

const Navbar = () => {
  const navItems = [
    { item: "Menu", icon: <MdDinnerDining size={25} /> },
    { item: "Account", icon: <MdAccountCircle size={25} /> },
    { item: "Orders", icon: <MdDeliveryDining size={25} /> },
    { item: "Help", icon: <IoMdHelpCircle size={25} /> },
    { item: "Promos", icon: <MdDiscount size={25} /> },
    { item: "Invite", icon: <FaUserFriends size={25} /> },
  ];

  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(false);

  const onSetCart = (newCart: any) => {
    setCart(newCart);
  };

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center px-4 py-2 bg-black/50">
      {/* Left Side */}
      <div className="flex items-center">
        <div
          className="cursor-pointer text-white lg:hidden"
          onClick={() => {
            setNav(!nav);
          }}
        >
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl text-white lg:4xl px-2">
          Dope <span className="font-bold">Chops</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-md">
          <p className="bg-orange-600 text-white rounded-full p-2">Pickup</p>
          <p className="p-2">Delivery</p>
        </div>
      </div>
      {/* Nav LG */}
      <nav className="hidden lg:block">
        <ul className="flex justify-between items-center pt-4 text-gray-400">
          {navItems.map((i) => (
            <div className="flex flex-col mx-8 items-center hover:text-white cursor-pointer">
              <li className="flex text-xl" key={i.item}>
                {i.icon}
              </li>
              <p>{i.item}</p>
            </div>
          ))}
        </ul>
      </nav>
      {/* Bag button */}
      <button
        className=" ml-2 border-none bg-white text-gray-900 hover:bg-orange-600 hover:text-white rounded-full items-center sm:flex py-2"
        onClick={() => setCart(true)}
      >
        <MdFoodBank size={20} />
        Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div
          className="bg-black/70 fixed w-full h-screen z-10 top-0 left-0 duration-300"
          onClick={() => setNav(!nav)}
        ></div>
      ) : (
        ""
      )}

      {/* Side drawer Menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-black/60 backdrop-blur-md text-white z-10 duration-300"
            : "hidden"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute left-4 top-4 cursor-pointer"
          onClick={() => {
            setNav(!nav);
          }}
        />
        <h2 className="text-2xl p-3 ml-12 mt-0.5">
          Dope <span className="font-bold">Chops</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-400">
            {navItems.map((i) => (
              <li className="flex py-4 text-xl justify-between" key={i.item}>
                {i.icon}
                {i.item}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Cart show={cart} onSetCart={onSetCart} />
    </div>
  );
};

export default Navbar;
