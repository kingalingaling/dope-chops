import Navbar from "../components/Navbar";
import AboutDetails from "../components/AboutDetails";
import Footer from "../components/Footer";

const About = () => {
    return (
        <section className="h-full bg-gray-800">
            <Navbar />
            <AboutDetails />
            <Footer />
        </section>
    )
}

export default About;