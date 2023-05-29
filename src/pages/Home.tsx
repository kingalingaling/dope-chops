import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import Foods from "../components/Foods";

function App() {
  return (
    <section className="bg-gray-800">
      <Navbar />
      <Hero />
      <FeatureCards />
      <Foods />
    </section>
  )
}

export default App
