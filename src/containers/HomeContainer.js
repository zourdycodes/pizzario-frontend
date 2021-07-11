import { BrowserRouter as Router } from "react-router-dom";
import { Hero, Products } from "../components";

export const HomeContainer = () => {
  return (
    <Router>
      <Hero />
      <Products />
    </Router>
  );
};
