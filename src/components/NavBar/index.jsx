import { Nav, NavLink, Bars, NavIcon } from "./styles/Navbar";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">PizzaNav</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};
