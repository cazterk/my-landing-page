import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import YoutubeCounter from "./components/youtube/YoutubeCounter";
require("typeface-nunito");

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Features />
      <YoutubeCounter />
      <About />
      <Footer />
    </Router>
  );
}

export default App;
