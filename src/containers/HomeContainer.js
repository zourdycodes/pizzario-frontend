import { BrowserRouter as Router } from "react-router-dom";
import { Hero } from "../components";

export const HomeContainer = () => {
  return (
    <Router>
      <Hero />
    </Router>
  );
};
