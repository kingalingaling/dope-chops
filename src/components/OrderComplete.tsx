import { GiFoodTruck } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const OrderComplete = () => {
    let navigate = useNavigate();
  const backToMenu = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white h-full text-black/70">
      <GiFoodTruck size={300} />
      <p>Your order has been completed!!</p>
      <p className="text-center p-4">
        Orders are usually delivered within <span className="text-bold text-orange-600">30 Minutes</span> so sit back
        and relax while we get you meal to you fresh from the oven
      </p>
      <button onClick={() => backToMenu()} className="p-2 w-1/5 hover:bg-orange-600 hover:border-none hover:text-white">Back to Menu</button>
    </div>
  );
};

export default OrderComplete;
