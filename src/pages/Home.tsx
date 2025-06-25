import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Nav />
      <main className="flex-grow-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
