"use client";

import InputItem from "@/components/InputItem";
import ProductCard from "@/components/ProductCard";
import { Typography } from "@/components/Typography";
import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  max-width: 1096px;
  margin: 0 auto;
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 40px;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Item = styled.div`
  flex: 0 0 calc(100% / 5 - 19.2px);
`;

const ProductList = () => {
  const products = Array.from({ length: 19 }).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  return (
    <>
      <Typography
        $fontFamily="var(--font-poppins)"
        $fontSize="32px"
        $fontWeight="600"
        $color="var(--color-1)"
      >
        Product list
      </Typography>
      <InputItem placeholder="Name, Catalogue, Code" />
      <Container>
        <List>
          {products.map((product) => {
            const showCarousel = {
              images: [
                "/assets/banner-3.jpg",
                "/assets/banner-4.jpg",
                "/assets/banner-5.jpg",
              ],
            };
            return (
              <Item key={product.id}>
                <ProductCard showCarousel={showCarousel} />
              </Item>
            );
          })}
        </List>
      </Container>
    </>
  );
};

export default ProductList;
