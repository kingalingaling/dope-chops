import Navbar from "../components/Navbar";
import { FaRegSadCry } from "react-icons/fa";

const OrderFailed = () => {
  return (
    <section className="bg-gray-800">
      <Navbar />
      <div className="flex h-screen flex-col justify-center text-center items-center bg-black/50 text-white">
        <FaRegSadCry size={200} />
        <h3 className="text-3xl text-orange-600 font-bold pt-1">Order Failed</h3>
        <p className="pt-4">
          We couldn't complete your order due to an interruption during the
          payment procedure. <br />The food items are still in your cart and you could
          always try again after a while
        </p>
      </div>
    </section>
  );
};

export default OrderFailed;
