import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeaturesSection from "./Components/Features";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
