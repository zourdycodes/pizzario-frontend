// @ts-nocheck
import styled from "styled-components/macro";

export const FeaturesContainer = styled.div`
  margin: 9rem 0;
  height: 40vh;
  margin-bottom: 15rem;
`;

export const FeatureContent = styled.div`
  position: relative;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url(${({ Img }) => (Img ? Img : "")});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;
  max-height: 450px;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: 30%;
  right: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  @media (max-width: 600px) {
    top: 28%;
    right: 0%;
    margin: 0 10px;
    padding: 0 30px;

    gap: 1.5rem;
  }

  @media (max-width: 800px) {
    right: 21%;
  }
`;

export const Button = styled.button`
  padding: 1.1rem 2.7rem;
  border: none;
  background: #ffc500;
  transition: all 0.2s ease-in-out;

  cursor: pointer;
  border-radius: 5px;
  color: black;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e31837;
    color: white;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.15rem;
  margin-top: -0.6rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
