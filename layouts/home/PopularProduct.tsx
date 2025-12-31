"use client";

import { Typography } from "@/components/Typography";
import styled from "styled-components";
import ProductCarousel from "./ProductCarousel";
import Center from "@/components/Center";
import SMNextIcon from "@/components/Icons/SmNextIcon";
import * as Types from "@/types";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  margin: auto;
  max-width: 1240px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  gap: 12px;
`;

const BgColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 284px;
  background-color: var(--color-4);
  z-index: -1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: top;
`;

type PopularProductProps = {
  products: {
    data: Types.Product[];
    pagination: Types.Pagination;
  };
};

const PopularProduct = (props: PopularProductProps) => {
  const { products } = props;
  return (
    <Wrapper>
      <BgColor />
      <Container>
        <Header>
          <Center $width="fit-content" $height="48px">
            <Typography $variant="h2" $lineHeight="1">
              สินค้ายอดนิยม / แนะนำ
            </Typography>
          </Center>

          <Center $width="fit-content" $height="24px" $gap="16px">
            <Typography $variant="p" $color="var(--color-7)" $lineHeight="1">
              สินค้าทั้งหมด
            </Typography>
            <SMNextIcon />
          </Center>
        </Header>
        <ProductCarousel products={products.data} />
      </Container>
    </Wrapper>
  );
};

export default PopularProduct;
