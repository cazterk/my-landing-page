import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Features />
    </Router>
  );
}

export default App;
