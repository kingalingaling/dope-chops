import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  let navigate = useNavigate();

  return (
    <div className="max-w-[1640px] sticky top-0 z-50 mx-auto flex justify-between items-center px-4 py-2 bg-gray-800/95">
      {/* Left Side */}
      <div className="flex items-center">
        <h1 className="text-2xl text-white lg:4xl px-2">
          Admin <span className="font-bold ml-5">Orders Dashboard</span>
        </h1>
        {/* <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-md">
          <p className="bg-orange-600 text-white rounded-full p-2">Pickup</p>
          <p className="p-2">Delivery</p>
        </div> */}
      </div>
      {/* Nav LG */}
      <button
        className="p-3 rounded-full border-none text-black bg-white font-bold hover:text-white hover:bg-orange-600"
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Site
      </button>
    </div>
  );
};

export default AdminNavbar;
