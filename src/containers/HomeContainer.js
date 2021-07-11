import { Navbar } from "../components";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const HomeContainer = () => {
  return (
    <Router>
      <Route exact path="/" component={Navbar} />
    </Router>
  );
};
