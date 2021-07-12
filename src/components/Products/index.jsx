import { productData } from "../../data/data";
import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  Button,
  ProductDescription,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductsCard,
  ProductTitle,
} from "./styles/Products";
import { Features } from "../index";

export const Products = () => {
  return (
    <ProductsContainer>
      <ProductsHeading>Choose Your Favourite !</ProductsHeading>

      <ProductsWrapper>
        {productData.slice(0, 3).map((item) => (
          <ProductsCard key={item.id}>
            <ProductImage src={item.img} alt={item.alt} />

            <ProductInfo>
              <ProductTitle>{item.name}</ProductTitle>
              <ProductDescription>{item.desc}</ProductDescription>
              <ProductPrice>{item.price}</ProductPrice>
              <Button>{item.button}</Button>
            </ProductInfo>
          </ProductsCard>
        ))}
      </ProductsWrapper>

      <Features />

      <ProductsWrapper>
        {productData.slice(3, productData.length).map((item) => (
          <ProductsCard key={item.id}>
            <ProductImage src={item.img} alt={item.alt} />

            <ProductInfo>
              <ProductTitle>{item.name}</ProductTitle>
              <ProductDescription>{item.desc}</ProductDescription>
              <ProductPrice>{item.price}</ProductPrice>
              <Button>{item.button}</Button>
            </ProductInfo>
          </ProductsCard>
        ))}
      </ProductsWrapper>
    </ProductsContainer>
  );
};
