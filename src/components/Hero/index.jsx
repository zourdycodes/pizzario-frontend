import {
  HeroContainer,
  HeroContent,
  ItemsContainer,
  Heading,
  SubHeading,
  Button,
} from "./styles/Hero";
import { Navbar } from "../index";

export const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Navbar />

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
