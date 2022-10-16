import Navbar from "layouts/Navbar";
import Hero from "layouts/Hero";
import Offer from "layouts/Offer";
import Work from "layouts/Work";
import SupportedChains from "layouts/SupportedChains";
import Footer from "layouts/Footer";

function App() {
  return (
    <div>
      <div className="mb-16">
        <Navbar />
      </div>

      {/* <div className="mb-20">
        <Hero />
      </div>

      <div className="mb-150px">
        <Offer />
      </div>

      <Work />

      <SupportedChains />

      <Footer /> */}
    </div>
  );
}

export default App;
