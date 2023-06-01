import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillInfoCircle } from "react-icons/ai";
import {
  MdFoodBank,
  MdDinnerDining,
  MdDiscount,
} from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { HiDocumentText } from 'react-icons/hi'
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import { foodCart } from "../context/FoodContext";
import Logo from '../assets/icons/logo.png';

const Navbar = () => {
  const navItems = [
    { item: "Menu", icon: <MdDinnerDining size={25} />, link: "/" },
    { item: "About", icon: <AiFillInfoCircle size={25} />, link: "/about" },
    {
      item: "Privacy Policy",
      icon: <HiDocumentText size={25} />,
      link: "/policy",
    },
    { item: "Help", icon: <IoMdHelpCircle size={25} />, link: "/help" },
    { item: "Promos", icon: <MdDiscount size={25} />, link: "/promos" },
    { item: "Invite", icon: <FaUserFriends size={25} />, link: "/invite" },
  ];

  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(false);

  const onSetCart = (newCart: any) => {
    setCart(newCart);
  };

  let navigate = useNavigate();
  const { cartItems } = foodCart();

  return (
    <div className="max-w-[1640px] sticky top-0 z-50 mx-auto flex justify-between items-center px-4 py-2 bg-gray-800/95">
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
        <h1 onClick={()=>navigate('/')} className="text-2xl flex items-center justify-center text-white md:4xl px-2 cursor-pointer">
          Dope <span className="font-bold">Chops</span>
          <img className="h-[50px] w-auto" src={Logo} alt="" />
        </h1>
        {/* <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-md">
          <p className="bg-orange-600 text-white rounded-full p-2">Pickup</p>
          <p className="p-2">Delivery</p>
        </div> */}
      </div>
      {/* Nav LG */}
      <nav className="hidden lg:block">
        <ul className="flex justify-between items-center pt-4 ">
          {navItems.map((i) => (
            <div
              className="flex flex-col mx-8 items-center hover:text-white text-gray-500 cursor-pointer"
              key={i.item}
              onClick={() => {
                navigate(i.link);
              }}
            >
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
        className=" ml-2 relative border-none bg-white text-gray-900 hover:bg-orange-600 hover:text-white rounded-full items-center sm:flex py-3 px-7"
        onClick={() => setCart(true)}
      >
        <MdFoodBank size={20} />
        <span className="hidden sm:block">Cart</span>
        <div className={cartItems.length > 0 ? "absolute bottom-0 flex items-center justify-center right-0 text-xs text-white bg-gray-600 h-5 w-5 rounded-full" : 'hidden'}>
          {cartItems.length}
        </div>
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
              <li
                className="flex py-4 text-xl justify-between cursor-pointer hover:text-white"
                onClick={() => {
                  navigate(i.link);
                }}
                key={i.item}
              >
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
