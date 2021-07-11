import { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  ItemsContainer,
  Heading,
  SubHeading,
  Button,
} from "./styles/Hero";
import { Navbar, Sidebar } from "../index";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <HeroContainer>
        <Navbar setIsOpen={setIsOpen} />
        <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />

        <HeroContent>
          <ItemsContainer>
            <Heading>Greatest Pizza Ever!</Heading>
            <SubHeading>Ready to serve in 20 minutes</SubHeading>
            <Button>Place Order</Button>
          </ItemsContainer>
        </HeroContent>
      </HeroContainer>
    </>
  );
};
