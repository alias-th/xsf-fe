"use client";

import { Typography } from "@/components/Typography";
import styled from "styled-components";
import ProductCarousel from "./ProductCarousel";
import Center from "@/components/Center";
import SMNextIcon from "@/components/Icons/SmNextIcon";
import * as Types from "@/types";
import Link from "next/link";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 16px;
`;

const Container = styled.div`
  margin: auto;
  max-width: 1240px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  gap: 56px;
`;

const BgColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 284px;
  background-color: var(--color-2);
  z-index: -1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: top;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

type CollectionProps = {
  products: {
    data: Types.Product[];
    pagination: Types.Pagination;
  };
};

const Collection = ({ products }: CollectionProps) => {
  return (
    <Wrapper>
      <BgColor />
      <Container>
        <Header>
          <TitleContainer>
            <Center $width="fit-content" $height="36px">
              <Typography
                $color="var(--color-1)"
                $variant="p-2xl"
                $fontFamily="var(--font-poppins)"
              >
                Collections
              </Typography>
            </Center>
            <Center>
              <Typography
                $color="var(--color-1)"
                $variant="p"
                $fontFamily="var(--font-prompt)"
              >
                <span>ค้นหาแรงบันดาลใจ ผ่านการออกแบบ</span> <br />
                <span>และคัดสรรวัสดุที่น่าสนใจเข้าไว้ด้วยกัน</span>
              </Typography>
            </Center>
          </TitleContainer>

          <Center $width="fit-content" $height="24px" $gap="16px">
            <Link href="/products">
              <Center $width="fit-content" $height="24px" $gap="16px">
                <Typography
                  $variant="p"
                  $color="var(--color-7)"
                  $lineHeight="1"
                >
                  สินค้าทั้งหมด
                </Typography>
                <SMNextIcon />
              </Center>
            </Link>
          </Center>
        </Header>
        <ProductCarousel products={products.data} enableVariableWidth={true} />
      </Container>
    </Wrapper>
  );
};

export default Collection;
