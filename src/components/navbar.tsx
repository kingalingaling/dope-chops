import {useState} from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { MdFoodBank, MdDeliveryDining, MdDinnerDining, MdDiscount } from "react-icons/md";
import { IoMdHelpCircle } from 'react-icons/io'
import { FaUserFriends } from 'react-icons/fa'

const Navbar = () => {
    const navItems = [
        {item: 'Orders', icon: <MdDeliveryDining size={25} className="mr-4"/>},
        {item: 'Week\'s Special', icon: <MdDinnerDining size={25} className="mr-4"/>},
        {item: 'Help', icon: <IoMdHelpCircle size={25} className="mr-4"/>},
        {item: 'Promotions', icon:<MdDiscount size={25} className="mr-4"/>},
        {item: 'Invite & Get Discounts', icon:<FaUserFriends size={25} className="mr-4"/>}
    ] 
   
    const [nav, setNav] = useState(false)

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex items-center">
        <div className="cursor-pointer text-white" onClick={() => {setNav(!nav)}}>
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
      {/* Search input */}
      <div className="bg-gray-600 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          name=""
          id=""
          placeholder="search"
        />
      </div>
      {/* Bag button */}
      <button className=" ml-2 border-none bg-white hidden text-gray-900 rounded-full items-center sm:flex py-2">
        <MdFoodBank size={20} />
        Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className="bg-black/70 fixed w-full h-screen z-10 top-0 left-0 duration-300" onClick={() => setNav(!nav)}></div> : ""}

      {/* Side drawer Menu */}
      <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-black/60 backdrop-blur-md text-white z-10 duration-300" : 'hidden'}>
        <AiOutlineClose
          size={30}
          className="absolute left-4 top-4 cursor-pointer"
          onClick={() => {setNav(!nav)}}
        />
        <h2 className="text-2xl p-3 ml-12 mt-0.5">
          Dope <span className="font-bold">Chops</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-400">
            {navItems.map(i => (
                <li className="flex py-4 text-xl" key={i.item}>
                {i.icon}
                {i.item}
              </li>
            ))
            }
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
