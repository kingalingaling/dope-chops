import { FaUserCircle } from "react-icons/fa";

const Card = () => {
  return (
    <div className="flex flex-col bg-black/80 rounded-lg p-4 text-white w-2/3">
      {/* Avatar */}
      <div className="flex justify-center p-4">
        <FaUserCircle
          size={70}
          className="cursor-pointer"
        />
      </div>
      {/* Title & Sub */}
      <div className="mx-auto">
        <p>Hello there, <span className="text-orange-500 text-xl">Chukwumerijie</span></p>
      </div>
      {/* Details */}
      <div></div>
    </div>
  );
};

export default Card;
