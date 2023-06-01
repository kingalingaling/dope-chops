import AdminNavbar from "../components/AdminNavbar";
import OrdersView from "../components/OrdersView";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { logout } from "../config/authService";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login page if the user is not authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/admin/sign-in");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/admin/sign-in");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <section className="bg-gray-800 h-screen">
      <AdminNavbar />
      <div className="flex items-center justify-center pt-5 bg-black/70">
        <button
          className="border-none bg-white text-black hover:bg-orange-600 hover:text-white"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
      <OrdersView />
    </section>
  );
};

export default Admin;
