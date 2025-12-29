"use client";

import { Typography } from "@/components/Typography";
import styled from "styled-components";
import ProductCarousel from "./ProductCarousel";
import Center from "@/components/Center";
import SMNextIcon from "@/components/Icons/SmNextIcon";

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
  background-color: var(--color-1);
  z-index: -1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: top;
`;

const DealProduct = () => {
  const products = Array.from({ length: 24 }).map((_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));
  return (
    <Wrapper>
      <BgColor />
      <Container>
        <Header>
          <Center $width="fit-content" $height="48px">
            <Typography
              $color="var(--color-7)"
              $variant="h2"
              $fontFamily="var(--font-poppins)"
            >
              X
            </Typography>
            <Typography
              $color="var(--white-1)"
              $variant="h2"
              $fontFamily="var(--font-poppins)"
            >
              clusive Deal
            </Typography>
          </Center>

          <Center $width="fit-content" $height="24px" $gap="16px">
            <Typography $variant="p" $color="var(--white-1)" $lineHeight="1">
              สินค้าทั้งหมด
            </Typography>
            <SMNextIcon color="var(--white-1)" />
          </Center>
        </Header>
        <ProductCarousel products={products} />
      </Container>
    </Wrapper>
  );
};

export default DealProduct;
