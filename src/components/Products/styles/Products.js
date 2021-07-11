import styled from "styled-components/macro";

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductsHeading = styled.h1`
  color: white;
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;

  @media (max-width: 400px) {
    padding: 0 1rem;
    font-size: 1.6rem;
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
`;

export const ProductsCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;

  @media (max-width: 780px) {
    padding-bottom: 5rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ProductTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const ProductImage = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductDescription = styled.p`
  letter-spacing: 1px;
  line-height: 2;
  padding: 0 5px;
  margin-bottom: 20px;
  color: #777777;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1.6rem;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  font-size: 1.2rem;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background: #e31837;
  padding: 1.2rem 3.3rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #ffc500;
    transition: all 0.2s ease-in-out;
    color: #000;
  }
`;
