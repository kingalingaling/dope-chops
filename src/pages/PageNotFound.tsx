import Navbar from "../components/Navbar";
import { ImConfused } from "react-icons/im";

const PageNotFound = () => {
  return (
    <section className="bg-gray-800">
      <Navbar />
      <div className="flex h-screen flex-col justify-center items-center bg-black/50 text-white">
        <ImConfused size={200} />
        <p className="text-center text-orange-600 text-3xl py-3 font-black">Error: 404</p>
        <p className="text-center font-bold">
          Looks like you went through a missing link. This page doesn't exist
          <br /> Lucky for you, Our Navbar above can help put you back on the
          right track
        </p>
      </div>
    </section>
  );
};

export default PageNotFound;
