"use client";

import { getProducts } from "@/actions/product";
import InputItem from "@/components/InputItem";
import ProductCard, {
  ImageWrapper,
  InfoWrapper,
  Wrapper,
} from "@/components/ProductCard";
import SpaceBetween from "@/components/SpaceBetween";
import { Typography } from "@/components/Typography";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Link from "next/dist/client/link";
import { useState } from "react";
import styled from "styled-components";
import { useDebounce } from "use-debounce";

const Container = styled.div`
  width: 100%;
  max-width: 1096px;
  min-height: 100vh;
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
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  const { data, error, isLoading } = useQuery({
    queryKey: ["products", debouncedSearchTerm],
    queryFn: () =>
      getProducts({
        page: 1,
        limit: 50,
        sortBy: "createdAt",
        sortOrder: "DESC",
        search: debouncedSearchTerm || "",
      }),
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return (
      <>
        <SpaceBetween>
          <Typography
            $fontFamily="var(--font-poppins)"
            $fontSize="32px"
            $fontWeight="600"
            $color="var(--color-1)"
          >
            Product list
          </Typography>
          <Link href="/products/upload">
            <u>Upload Product</u>
          </Link>
        </SpaceBetween>
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
      <SpaceBetween>
        <Typography
          $fontFamily="var(--font-poppins)"
          $fontSize="32px"
          $fontWeight="600"
          $color="var(--color-1)"
        >
          Product list
        </Typography>
        <Link href="/products/upload">
          <u>Upload Product</u>
        </Link>
      </SpaceBetween>
      <InputItem
        placeholder="Name, Code"
        onChange={(e) => setSearchTerm(e.target.value.trim())}
      />
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
