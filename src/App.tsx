import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
