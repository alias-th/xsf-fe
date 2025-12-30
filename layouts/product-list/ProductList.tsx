"use client";

import { getProducts } from "@/actions/product";
import InputItem from "@/components/InputItem";
import ProductCard, {
  ImageWrapper,
  InfoWrapper,
  Wrapper,
} from "@/components/ProductCard";
import { Typography } from "@/components/Typography";
import { useQuery } from "@tanstack/react-query";
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
  min-width: 0;
`;

const ProductList = () => {
  const products = Array.from({ length: 19 }).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      getProducts({
        page: 1,
        limit: 50,
        sortBy: "createdAt",
        sortOrder: "DESC",
      }),
  });

  if (isLoading) {
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
            {Array.from({ length: 8 }).map((_, index) => {
              const product = {
                id: index + 1,
                name: `Product ${index + 1}`,
              };
              return (
                <Item key={product.id}>
                  <Wrapper $width="200px">
                    <ImageWrapper />
                    <InfoWrapper />
                  </Wrapper>
                </Item>
              );
            })}
          </List>
        </Container>
      </>
    );
  }

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
          {data?.data?.map((product) => {
            return (
              <Item key={product.id}>
                <ProductCard showCarousel product={product} />
              </Item>
            );
          })}
        </List>
      </Container>
    </>
  );
};

export default ProductList;
