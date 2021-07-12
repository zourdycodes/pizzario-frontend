import { BrowserRouter as Router } from "react-router-dom";
import { Hero, Products, Footer } from "../components";

export const HomeContainer = () => {
  return (
    <Router>
      <Hero />
      <Products />
      <Footer />
    </Router>
  );
};
