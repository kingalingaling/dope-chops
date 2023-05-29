import Navbar from "../components/Navbar";
import OrderComplete from "../components/OrderComplete";

const OrderCompleted = () => {
    return(
        <section className="h-screen bg-black/70">
            <Navbar />
            <OrderComplete />
        </section>        
    )
}

export default OrderCompleted;