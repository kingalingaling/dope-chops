import Navbar from "../components/Navbar";
import AboutDetails from "../components/AboutDetails";

const About = () => {
    return (
        <section className="h-full lg:h-screen bg-gray-800">
            <Navbar />
            <AboutDetails />
        </section>
    )
}

export default About;