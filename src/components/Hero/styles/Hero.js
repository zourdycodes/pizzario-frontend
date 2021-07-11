import styled from "styled-components/macro";
import ImageBG from "../../../images/pizza-3.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImageBG});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// mobile responsive fonts (minVal, screenMaintain, maxVal)
export const Heading = styled.div`
  font-size: clamp(2.5rem, 10vw, 5rem);
  box-shadow: 3px 5px #e9ba23;
  margin-bottom: 2rem;
  letter-spacing: 3px;
`;

export const SubHeading = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 3rem;
`;
export const Button = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;

  color: #fff;
  transition: all 0.2s ease-out;
  border-radius: 5px;

  &:hover {
    background: #ffc500;
    cursor: pointer;
    color: #000;
  }
`;
