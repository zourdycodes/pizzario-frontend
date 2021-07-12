// @ts-nocheck
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  FeaturesContainer,
  FeatureContent,
  Button,
  Heading,
  InfoWrapper,
  Description,
} from "./styles/Features";
import FeatureImage1 from "../../images/featured.jpg";
import FeatureImage2 from "../../images/featured2.jpg";
import FeatureImage3 from "../../images/featured3.jpg";

export const Features = () => {
  return (
    <FeaturesContainer>
      <Carousel autoPlay={false} infiniteLoop={false} showStatus={false}>
        <FeatureContent Img={FeatureImage1}>
          <InfoWrapper>
            <Heading>Pizza of the Day</Heading>
            <Description>
              Truffle alfredo topped with 24-caratt gold dust topping
            </Description>
            <Button>Order Now</Button>
          </InfoWrapper>
        </FeatureContent>

        <FeatureContent Img={FeatureImage2}>
          <InfoWrapper>
            <Heading>Pizza of the Day</Heading>
            <Description>
              Truffle alfredo topped with 24-caratt gold dust topping
            </Description>
            <Button>Order Now</Button>
          </InfoWrapper>
        </FeatureContent>

        <FeatureContent Img={FeatureImage3}>
          <InfoWrapper>
            <Heading>Pizza of the Day</Heading>
            <Description>
              Truffle alfredo topped with 24-caratt gold dust topping
            </Description>
            <Button>Order Now</Button>
          </InfoWrapper>
        </FeatureContent>
      </Carousel>
    </FeaturesContainer>
  );
};
