import Navbar from "../components/Navbar"
import OrdersView from "../components/OrdersView";

const Admin = () => {
    return(
        <section className="bg-gray-800 h-screen">
            <Navbar />
            <OrdersView />
        </section>
    )
}

export default Admin;