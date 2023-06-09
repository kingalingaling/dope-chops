import Logo from "../assets/icons/logo.png";
import { BsFacebook,BsTwitter, BsInstagram } from "react-icons/Bs";

const Footer = () => {
  return (
    <div className="flex text-white flex-col justify-center w-full items-center p-4 bg-black/50">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex md:w-1/3 items-center">
            <img className="w-[60px] h-auto" src={Logo} alt="" />
            <h1 className="text-xl font-bold">Dope Chops</h1>
        </div>
        <div className="font-bold text-xs text-center md:w-1/3">&copy; Copyright Dope Chops. All Rights Reserved</div>
        <div className="font-bold text-xs pt:2 md:pt-0 md:w-1/3 hover:text-orange-600 text-right cursor-pointer">Contact Us</div>
      </div>
      <hr className="w-full" />
      <div className="flex items-center justify-center pt-4">
        <BsFacebook size={25} className="mx-2 hover:text-blue-600 cursor-pointer" />
        <BsTwitter size={25} className="mx-2 hover:text-blue-400 cursor-pointer" />
        <BsInstagram size={25} className="mx-2 cursor-pointer hover:text-pink-500" />
      </div>
    </div>
  );
};

export default Footer;
